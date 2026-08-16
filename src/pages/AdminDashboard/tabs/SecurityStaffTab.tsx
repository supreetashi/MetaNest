import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

type Staff = {
  id: string;
  name: string;
  role: string;
  shift: string;
  phone: string;
  salary: string;
  joinDate: string;
  status: 'active' | 'on leave' | 'inactive';
};

const INITIAL_STAFF: Staff[] = [
  { id: 's1', name: 'Suresh Yadav', role: 'Head Security', shift: 'Morning', phone: '+91 99887 66554', salary: '₹22,000', joinDate: '2020-01-15', status: 'active' },
  { id: 's2', name: 'Ramkumar S', role: 'Watchman', shift: 'Morning', phone: '+91 88776 55443', salary: '₹16,000', joinDate: '2021-06-01', status: 'active' },
  { id: 's3', name: 'Bijay Thapa', role: 'Watchman', shift: 'Evening', phone: '+91 77665 44332', salary: '₹16,000', joinDate: '2022-03-10', status: 'active' },
  { id: 's4', name: 'Mohan Lal', role: 'Night Guard', shift: 'Night', phone: '+91 66554 33221', salary: '₹18,000', joinDate: '2021-11-20', status: 'active' },
  { id: 's5', name: 'Arvind Kumar', role: 'Night Guard', shift: 'Night', phone: '+91 55443 22110', salary: '₹18,000', joinDate: '2023-02-05', status: 'on leave' },
];

function SecurityStaffTab() {
  const [staff] = useState<Staff[]>(INITIAL_STAFF);

  return (
    <Stack spacing={2}>
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>Security & Watchmen</Typography>

      <Paper variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography sx={{ fontWeight: 700 }}>Security Staff</Typography>
          <Button variant="contained" sx={{ bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }}>+ Add Staff</Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Shift</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Join Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staff.map((s) => (
                <TableRow key={s.id}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.role}</TableCell>
                  <TableCell><Chip label={s.shift} size="small" color={s.shift === 'Morning' ? 'success' : s.shift === 'Evening' ? 'warning' : 'default'} /></TableCell>
                  <TableCell>{s.phone}</TableCell>
                  <TableCell>{s.salary}</TableCell>
                  <TableCell>{s.joinDate}</TableCell>
                  <TableCell>
                    <Chip label={s.status} size="small" sx={{ bgcolor: s.status === 'active' ? '#d1fae5' : s.status === 'on leave' ? '#fef3c7' : '#f3f4f6', color: s.status === 'active' ? '#047857' : s.status === 'on leave' ? '#975a16' : '#374151' }} />
                  </TableCell>
                  <TableCell align="right">✎ 🗑</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
}

export default SecurityStaffTab;
