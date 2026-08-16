import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MaintenanceConfigTab() {
  return (
    <Stack spacing={2}>
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>Maintenance Configuration</Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Paper variant="outlined" sx={{ flex: 1, borderRadius: 3, p: 2.5 }}>
          <Typography sx={{ fontWeight: 800, mb: 1.25 }}>Monthly Charges</Typography>
          <Stack spacing={1.25}>
            <TextField label="Base Charge (₹)" defaultValue="2000" />
            <TextField label="Per Sq.Ft (₹)" defaultValue="1.5" />
            <TextField label="Water (₹)" defaultValue="300" />
            <TextField label="Parking (₹)" defaultValue="500" />
            <TextField label="Sinking Fund (₹)" defaultValue="200" />
            <TextField label="Other (₹)" defaultValue="300" />
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ width: 420, borderRadius: 3, p: 2.5 }}>
          <Typography sx={{ fontWeight: 800, mb: 1.25 }}>Due Date & Late Fee</Typography>
          <Stack spacing={1.25}>
            <TextField label="Due Day of Month" defaultValue="5" />
            <TextField label="Grace Period (Days)" defaultValue="5" />
            <TextField label="Late Fee/Day (₹)" defaultValue="10" />
            <TextField label="Max Late Fee (₹)" defaultValue="1000" />
          </Stack>

          <Box sx={{ mt: 2.5, p: 1.5, bgcolor: 'rgba(79,70,229,0.06)', borderRadius: 2 }}>
            <Typography sx={{ fontWeight: 700, color: '#4f46e5' }}>Sample Bill — 2BHK (1050 sq.ft) + Parking</Typography>
            <Typography sx={{ mt: 1 }}>Base  ₹2,000</Typography>
            <Typography>Area (1050×1.5)  ₹1,575</Typography>
            <Typography>Water  ₹300</Typography>
            <Typography>Parking  ₹500</Typography>
            <Typography>Sinking  ₹200</Typography>
            <Typography sx={{ fontWeight: 800, mt: 1 }}>Total  ₹4,875</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="contained" sx={{ bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }}>Save</Button>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  );
}

export default MaintenanceConfigTab;
