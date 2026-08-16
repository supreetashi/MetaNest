import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StatCard from '../StatCard';
import { INITIAL_WINGS, MOCK_FLAT_UNITS, INITIAL_BILLS } from '../mockData';

const CURRENT_MONTH_LABEL = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
}).format(new Date());

const monthlyCollection = [
  { month: 'Jan', value: 120000 },
  { month: 'Feb', value: 145000 },
  { month: 'Mar', value: 165000 },
  { month: 'Apr', value: 175000 },
  { month: 'May', value: 160000 },
  { month: 'Jun', value: 185000 },
  { month: 'Jul', value: 145000 },
];

const chartMax = Math.max(...monthlyCollection.map((item) => item.value));

function DashboardTab() {
  const totalFlats = INITIAL_WINGS.reduce((s, w) => s + w.totalFlats, 0);
  const occupied = MOCK_FLAT_UNITS.filter((f) => f.status === 'occupied').length;
  const occupancyPct = totalFlats > 0 ? Math.round((occupied / totalFlats) * 100) : 0;

  const paid = INITIAL_BILLS.filter((b) => b.status === 'Paid').reduce((s, b) => s + b.amount, 0);
  const pending = INITIAL_BILLS.filter((b) => b.status === 'Pending').reduce((s, b) => s + b.amount, 0);

  const donutColors = ['#4f46e5', '#0f9d7b', '#f59e0b'];
  const donutSegments = INITIAL_WINGS.map((wing, index) => ({
    wing,
    color: donutColors[index % donutColors.length],
    angle: (wing.occupiedFlats / totalFlats) * 100,
  }));

  const donutGradient = `conic-gradient(${donutSegments
    .map((segment, index) => {
      const start = donutSegments
        .slice(0, index)
        .reduce((sum, item) => sum + item.angle, 0);
      return `${segment.color} ${start}% ${start + segment.angle}%`;
    })
    .join(', ')})`;

  return (
    <Stack spacing={2.5}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <StatCard label="Total Flats" value={String(totalFlats)} footerText={`${occupied} occupied`} />
        <StatCard
          label="Occupancy"
          value={`${occupancyPct}%`}
          footerIcon={<TrendingUpIcon sx={{ fontSize: 15, color: '#22c55e' }} />}
          footerText="vs last month"
          footerColor="#22c55e"
        />
        <StatCard label="Jul Collection" value={`₹${paid.toLocaleString('en-IN')}`} footerText={CURRENT_MONTH_LABEL} />
        <StatCard
          label="Outstanding"
          value={`₹${pending.toLocaleString('en-IN')}`}
          valueColor="#eb7d1d"
          footerIcon={<ScheduleIcon sx={{ fontSize: 15, color: '#eb7d1d' }} />}
          footerText="5 flats pending"
          footerColor="#eb7d1d"
        />
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Paper variant="outlined" sx={{ flex: 1, borderRadius: 3, borderColor: 'rgba(148, 163, 184, 0.35)', p: 2.5, bgcolor: 'rgba(255,255,255,0.22)' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#2d3748', mb: 1.25, letterSpacing: '-0.04em' }}>
              Monthly Collection — Last 6 Months
            </Typography>

          <Box sx={{ position: 'relative', height: 220, mt: 1.5, px: 1.5, pb: 0.5 }}>
            <Box sx={{ position: 'absolute', inset: 0, borderBottom: '1px solid rgba(148,163,184,0.45)', borderLeft: '1px solid rgba(148,163,184,0.45)' }} />
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'end', justifyContent: 'space-between', height: '100%', gap: 1.25 }}>
              {monthlyCollection.map((item) => (
                <Box key={item.month} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end', height: '100%' }}>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'end', height: '100%' }}>
                    <Box
                      sx={{
                        width: '58%',
                        height: `${(item.value / chartMax) * 100}%`,
                        minHeight: 28,
                        borderRadius: '8px 8px 0 0',
                        bgcolor: item.month === 'Jul' ? '#f59e0b' : '#4f46e5',
                        boxShadow: 'inset 0 -10px 0 rgba(255,255,255,0.06)',
                      }}
                    />
                  </Box>
                  <Typography sx={{ mt: 1, fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>{item.month}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ width: 350, borderRadius: 3, borderColor: 'rgba(148, 163, 184, 0.35)', p: 2.5, bgcolor: 'rgba(255,255,255,0.22)' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#2d3748', mb: 1.75, letterSpacing: '-0.04em' }}>
              Occupancy by Wing
            </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
            <Box
              sx={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: donutGradient,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(148,163,184,0.08)',
              }}
            >
              <Box sx={{ width: 84, height: 84, borderRadius: '50%', bgcolor: '#f3f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, flex: 1 }}>
              {INITIAL_WINGS.map((wing, index) => (
                <Box key={wing.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: donutColors[index % donutColors.length] }} />
                    <Typography sx={{ fontWeight: 700, color: '#374151' }}>{wing.name}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: '#374151' }}>{wing.occupiedFlats} flats</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Stack>

      <Paper variant="outlined" sx={{ borderRadius: 3, borderColor: 'rgba(148, 163, 184, 0.35)', p: 2.5, bgcolor: 'rgba(255,255,255,0.22)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <HomeWorkIcon sx={{ color: '#4f46e5', fontSize: 22 }} />
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#374151' }}>Recent Payments</Typography>
        </Box>
        <Typography sx={{ color: '#64748b' }}>No recent payments in demo data.</Typography>
      </Paper>
    </Stack>
  );
}

export default DashboardTab;
