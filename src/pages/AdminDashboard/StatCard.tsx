import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  label: string;
  value: string;
  valueColor?: string;
  footerIcon?: ReactNode;
  footerText: string;
  footerColor?: string;
}

function StatCard({ label, value, valueColor, footerIcon, footerText, footerColor }: StatCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.25,
        borderRadius: 3,
        borderColor: 'rgba(148, 163, 184, 0.35)',
        flex: 1,
        minWidth: 0,
        bgcolor: 'rgba(255,255,255,0.28)',
      }}
    >
      <Stack spacing={1.2}>
        <Typography
          sx={{
            color: '#6b7280',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.8rem',
            lineHeight: 1.08,
            letterSpacing: '-0.05em',
            fontWeight: 800,
            color: valueColor ?? '#1f2937',
          }}
        >
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minHeight: 18 }}>
          {footerIcon}
          <Typography
            sx={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: footerColor ?? '#6b7280',
            }}
          >
            {footerText}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default StatCard;
