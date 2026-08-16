import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

// small mock data
const MOCK_PAYMENTS = [
  { id: 'RCP-2024-001', flat: 'A-001', resident: 'Rajesh Kumar', amount: 3500, date: '2024-07-02', mode: 'Online', status: 'paid' },
  { id: 'RCP-2024-002', flat: 'B-002', resident: 'Lakshmi Iyer', amount: 4500, date: '2024-07-02', mode: 'NEFT', status: 'paid' },
  { id: 'RCP-2024-003', flat: 'A-102', resident: 'Meera Patel', amount: 4500, date: '2024-07-01', mode: 'Cash', status: 'paid' },
  { id: 'RCP-2024-004', flat: 'C-002', resident: 'Sanjay Bhatt', amount: 3500, date: '2024-07-01', mode: 'UPI', status: 'paid' },
  { id: 'RCP-2024-005', flat: 'A-101', resident: 'Vikram Singh', amount: 3500, date: '2024-06-30', mode: 'Cheque', status: 'paid' },
];

const MOCK_OUTSTANDING = [
  { flat: 'A-002', resident: 'Sunita Verma', principal: 4500, lateFee: 0, total: 4500, dueDate: '2024-07-05', status: 'Due soon' },
  { flat: 'A-003', resident: 'Deepak Malhotra', principal: 3500, lateFee: 500, total: 4000, dueDate: '2024-06-05', status: '26d overdue' },
  { flat: 'B-003', resident: 'Rajiv Kapoor', principal: 3500, lateFee: 500, total: 4000, dueDate: '2024-06-05', status: '26d overdue' },
  { flat: 'B-004', resident: 'Nisha Saxena', principal: 2500, lateFee: 0, total: 2500, dueDate: '2024-07-05', status: 'Due soon' },
  { flat: 'C-003', resident: 'Rekha Menon', principal: 3500, lateFee: 1000, total: 4500, dueDate: '2024-05-05', status: '56d overdue' },
];

function BillingCollectionTab() {
  const [active, setActive] = useState<'generate' | 'payments' | 'outstanding'>('generate');
  const [search, setSearch] = useState('');

  const occupiedFlats = 54; // placeholder matching screenshots
  const totalAmount = 216000; // placeholder

  const paymentsFiltered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return MOCK_PAYMENTS;
    return MOCK_PAYMENTS.filter((p) => p.flat.toLowerCase().includes(q) || p.resident.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
  }, [search]);

  return (
    <Stack spacing={2}>
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>Billing & Collection</Typography>

      <Box sx={{ display: 'flex', gap: 1.25, alignItems: 'center' }}>
        <Button
          onClick={() => setActive('generate')}
          variant={active === 'generate' ? 'contained' : 'text'}
          sx={{ borderRadius: 6, textTransform: 'none', bgcolor: active === 'generate' ? '#4f46e5' : 'transparent', color: active === 'generate' ? '#fff' : '#6b7280', px: 3 }}
        >
          Generate Bills
        </Button>
        <Button
          onClick={() => setActive('payments')}
          variant={active === 'payments' ? 'contained' : 'text'}
          sx={{ borderRadius: 6, textTransform: 'none', bgcolor: active === 'payments' ? '#4f46e5' : 'transparent', color: active === 'payments' ? '#fff' : '#6b7280', px: 3 }}
        >
          Payments
        </Button>
        <Button
          onClick={() => setActive('outstanding')}
          variant={active === 'outstanding' ? 'contained' : 'text'}
          sx={{ borderRadius: 6, textTransform: 'none', bgcolor: active === 'outstanding' ? '#4f46e5' : 'transparent', color: active === 'outstanding' ? '#fff' : '#6b7280', px: 3 }}
        >
          Outstanding
        </Button>
      </Box>

      {active === 'generate' && (
        <Paper variant="outlined" sx={{ borderRadius: 3, p: 3 }}>
          <Typography sx={{ fontWeight: 800, mb: 1.25 }}>Generate Monthly Bills</Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
            <TextField label="Billing Month" value={"July, 2024"} sx={{ flex: 1 }} />
            <TextField label="Due Date" value={"05-07-2024"} sx={{ width: 220 }} />
          </Stack>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
            <Paper variant="outlined" sx={{ flex: 1, p: 2, bgcolor: 'rgba(15,23,42,0.02)' }}>
              <Typography sx={{ color: '#6b7280', fontWeight: 700 }}>Occupied Flats</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '1.25rem' }}>{occupiedFlats}</Typography>
            </Paper>
            <Paper variant="outlined" sx={{ flex: 1, p: 2, bgcolor: 'rgba(15,23,42,0.02)' }}>
              <Typography sx={{ color: '#6b7280', fontWeight: 700 }}>Total Amount</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '1.25rem' }}>₹{totalAmount.toLocaleString('en-IN')}</Typography>
            </Paper>
            <Paper variant="outlined" sx={{ flex: 1, p: 2, bgcolor: 'rgba(15,23,42,0.02)' }}>
              <Typography sx={{ color: '#6b7280', fontWeight: 700 }}>Generated</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '1.25rem' }}>0</Typography>
            </Paper>
          </Box>

          <Button variant="contained" sx={{ bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }}>Generate Bills for July 2024</Button>
        </Paper>
      )}

      {active === 'payments' && (
        <Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
          <Typography sx={{ fontWeight: 800, mb: 1.25 }}>Payment Records</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <TextField
              size="small"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: 280 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Receipt No.</TableCell>
                  <TableCell>Flat</TableCell>
                  <TableCell>Resident</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Mode</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paymentsFiltered.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell sx={{ color: '#6b7280' }}>{p.id}</TableCell>
                    <TableCell>{p.flat}</TableCell>
                    <TableCell>{p.resident}</TableCell>
                    <TableCell>₹{p.amount.toLocaleString('en-IN')}</TableCell>
                    <TableCell>{p.date}</TableCell>
                    <TableCell>
                      <Chip label={p.mode} size="small" sx={{ bgcolor: '#eef2ff', color: '#4f46e5' }} />
                    </TableCell>
                    <TableCell>
                      <Chip label={p.status} size="small" sx={{ bgcolor: '#d1fae5', color: '#047857' }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {active === 'outstanding' && (
        <Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
          <Typography sx={{ fontWeight: 800, mb: 1.25 }}>Outstanding — ₹19,500</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Button variant="outlined">Send Reminders</Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Flat</TableCell>
                  <TableCell>Resident</TableCell>
                  <TableCell>Principal</TableCell>
                  <TableCell>Late Fee</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {MOCK_OUTSTANDING.map((o) => (
                  <TableRow key={o.flat}>
                    <TableCell>{o.flat}</TableCell>
                    <TableCell>{o.resident}</TableCell>
                    <TableCell>₹{o.principal.toLocaleString('en-IN')}</TableCell>
                    <TableCell sx={{ color: o.lateFee > 0 ? '#ef4444' : 'inherit' }}>{o.lateFee > 0 ? `₹${o.lateFee}` : '—'}</TableCell>
                    <TableCell>₹{o.total.toLocaleString('en-IN')}</TableCell>
                    <TableCell>{o.dueDate}</TableCell>
                    <TableCell>
                      <Chip label={o.status} size="small" sx={{ bgcolor: o.status.includes('overdue') ? '#fee2e2' : '#fef3c7', color: o.status.includes('overdue') ? '#b91c1c' : '#92400e' }} />
                    </TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" size="small">Record Payment</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Stack>
  );
}

export default BillingCollectionTab;
