import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { INITIAL_SOCIETY_DETAILS } from '../mockData';

function SocietyDetailsTab() {
  const details = INITIAL_SOCIETY_DETAILS;

  const detailRows = [
    { label: 'Society Name', value: details.societyName },
    { label: 'Registration No.', value: details.registrationNo },
    { label: 'Total Flats', value: String(details.totalFlats) },
    { label: 'Total Wings', value: '3 (A, B, C)' },
  ];

  const contactRows = [
    { label: 'Address', value: `Survey No. 45, Baner Road, ${details.cityState}` },
    { label: 'State / PIN', value: 'Maharashtra — 411045' },
    { label: 'Phone', value: '+91 20 2560 8800' },
    { label: 'Email', value: 'admin@epsilonhomes.in' },
  ];

  const committeeRows = [
    { label: 'Chairman', value: 'Mr. Suresh Mehta' },
    { label: 'Secretary', value: 'Mrs. Priya Sharma' },
    { label: 'Treasurer', value: 'Mr. Vikram Nair' },
  ];

  const bankRows = [
    { label: 'Bank', value: 'HDFC Bank, Baner Branch' },
    { label: 'Account No.', value: '50200067281234' },
    { label: 'IFSC Code', value: 'HDFC001234' },
  ];

  const sectionCardSx = {
    flex: 1,
    borderRadius: 3,
    borderColor: 'rgba(148, 163, 184, 0.35)',
    p: 2.4,
    minHeight: 280,
    bgcolor: 'rgba(255,255,255,0.22)',
  };

  const renderRows = (rows: { label: string; value: string }[]) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) auto', rowGap: 2.2, columnGap: 2 }}>
      {rows.map((row) => (
        <Box key={row.label} sx={{ display: 'contents' }}>
          <Typography sx={{ color: '#697386', fontSize: '1rem', fontWeight: 600, lineHeight: 1.5 }}>{row.label}</Typography>
          <Typography sx={{ color: '#2f3746', fontSize: '1.05rem', fontWeight: 700, textAlign: 'right', lineHeight: 1.5 }}>{row.value}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Stack spacing={2.5}>
      <Typography variant="h4" sx={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#2d3748', lineHeight: 1.15 }}>
        Society Details
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Paper variant="outlined" sx={sectionCardSx}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 2.2, display: 'flex', alignItems: 'center', gap: 1, color: '#2d3748' }}>
            <BusinessIcon sx={{ fontSize: 26, color: '#4f46e5' }} />
            Basic Information
          </Typography>
          {renderRows(detailRows)}
        </Paper>

        <Paper variant="outlined" sx={sectionCardSx}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 2.2, display: 'flex', alignItems: 'center', gap: 1, color: '#2d3748' }}>
            <ContactPhoneIcon sx={{ fontSize: 26, color: '#4f46e5' }} />
            Contact Information
          </Typography>
          {renderRows(contactRows)}
        </Paper>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Paper variant="outlined" sx={sectionCardSx}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 2.2, display: 'flex', alignItems: 'center', gap: 1, color: '#2d3748' }}>
            <PeopleAltIcon sx={{ fontSize: 26, color: '#4f46e5' }} />
            Managing Committee
          </Typography>
          {renderRows(committeeRows)}
        </Paper>

        <Paper variant="outlined" sx={sectionCardSx}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 2.2, display: 'flex', alignItems: 'center', gap: 1, color: '#2d3748' }}>
            <AccountBalanceIcon sx={{ fontSize: 26, color: '#4f46e5' }} />
            Bank Details
          </Typography>
          {renderRows(bankRows)}
        </Paper>
      </Stack>
    </Stack>
  );
}

export default SocietyDetailsTab;
