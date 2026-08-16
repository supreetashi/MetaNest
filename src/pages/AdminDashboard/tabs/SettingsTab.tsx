import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type SettingsTabKey = 'society' | 'bank' | 'billing' | 'notifications';

const TAB_ITEMS: { key: SettingsTabKey; label: string }[] = [
  { key: 'society', label: 'Society Info' },
  { key: 'bank', label: 'Bank Account' },
  { key: 'billing', label: 'Billing' },
  { key: 'notifications', label: 'Notifications' },
];

const societyFields = [
  { label: 'Society Name', value: 'Epsilon Homes' },
  { label: 'Registration No.', value: 'MAH/2015/EPH-001' },
  { label: 'Address', value: 'Survey No. 45, Baner Road, Baner' },
  { label: 'City', value: 'Pune' },
  { label: 'State', value: 'Maharashtra' },
  { label: 'PIN', value: '411045' },
  { label: 'Phone', value: '+91 20 2560 8800' },
  { label: 'Email', value: 'admin@epsilonhomes.in' },
];

const bankFields = [
  { label: 'Bank Name', value: 'HDFC Bank, Baner Branch' },
  { label: 'Account Number', value: '50280067281234' },
  { label: 'IFSC Code', value: 'HDFC001234' },
  { label: 'Account Type', value: 'Current Account' },
];

const billingFields = [
  { label: 'Receipt Prefix', value: 'RCP' },
  { label: 'Starting No.', value: '2024001' },
  { label: 'Bill Prefix', value: 'BILL' },
  { label: 'Financial Year', value: '2024-25' },
];

const notificationRows = [
  { label: 'SMS Notifications', value: true },
  { label: 'Email Notifications', value: true },
  { label: 'WhatsApp Notifications', value: false },
  { label: 'Payment Reminders', value: true },
  { label: 'Overdue Alerts', value: true },
];

function SettingsTab() {
  const [activeTab, setActiveTab] = useState<SettingsTabKey>('society');

  const renderContent = () => {
    if (activeTab === 'society') {
      return (
        <Paper
          sx={{
            borderRadius: 3,
            border: '1px solid rgba(148,163,184,0.32)',
            boxShadow: 'none',
            bgcolor: '#f7f9fb',
            p: 0,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ p: 2.5, display: 'grid', gap: 2.2 }}>
            {societyFields.map((field) => (
              <Box key={field.label}>
                <Typography sx={{ fontSize: '1.04rem', fontWeight: 700, color: '#1f2a37', mb: 0.9 }}>{field.label}</Typography>
                <TextField
                  fullWidth
                  value={field.value}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: '#eef3f8',
                      borderRadius: 2,
                      height: 52,
                      fontSize: '1.05rem',
                      color: '#1f2a37',
                      '& fieldset': {
                        borderColor: '#dfe5ee',
                      },
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Paper>
      );
    }

    if (activeTab === 'bank') {
      return (
        <Paper
          sx={{
            borderRadius: 3,
            border: '1px solid rgba(148,163,184,0.32)',
            boxShadow: 'none',
            bgcolor: '#f7f9fb',
            p: 0,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ p: 2.5, display: 'grid', gap: 2.2 }}>
            {bankFields.map((field) => (
              <Box key={field.label}>
                <Typography sx={{ fontSize: '1.04rem', fontWeight: 700, color: '#1f2a37', mb: 0.9 }}>{field.label}</Typography>
                <TextField
                  fullWidth
                  value={field.value}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: '#eef3f8',
                      borderRadius: 2,
                      height: 52,
                      fontSize: '1.05rem',
                      color: '#1f2a37',
                      '& fieldset': {
                        borderColor: '#dfe5ee',
                      },
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Paper>
      );
    }

    if (activeTab === 'billing') {
      return (
        <Paper
          sx={{
            borderRadius: 3,
            border: '1px solid rgba(148,163,184,0.32)',
            boxShadow: 'none',
            bgcolor: '#f7f9fb',
            p: 0,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ p: 2.5, display: 'grid', gap: 2.2 }}>
            {billingFields.map((field) => (
              <Box key={field.label}>
                <Typography sx={{ fontSize: '1.04rem', fontWeight: 700, color: '#1f2a37', mb: 0.9 }}>{field.label}</Typography>
                <TextField
                  fullWidth
                  value={field.value}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: '#eef3f8',
                      borderRadius: 2,
                      height: 52,
                      fontSize: '1.05rem',
                      color: '#1f2a37',
                      '& fieldset': {
                        borderColor: '#dfe5ee',
                      },
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Paper>
      );
    }

    return (
      <Paper
        sx={{
          borderRadius: 3,
          border: '1px solid rgba(148,163,184,0.32)',
          boxShadow: 'none',
          bgcolor: '#f7f9fb',
          p: 0,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ p: 2.5, display: 'grid', gap: 1.5 }}>
          {notificationRows.map((row) => (
            <Box
              key={row.label}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: row.label === notificationRows[notificationRows.length - 1].label ? 'none' : '1px solid rgba(148,163,184,0.12)',
                py: 1.2,
                px: 0.6,
              }}
            >
              <Typography sx={{ fontSize: '1.06rem', fontWeight: 700, color: '#1f2a37' }}>{row.label}</Typography>
              <Switch
                checked={row.value}
                sx={{
                  width: 58,
                  height: 32,
                  '& .MuiSwitch-switchBase': {
                    '&.Mui-checked': {
                      transform: 'translateX(26px)',
                      color: '#fff',
                    },
                  },
                  '& .MuiSwitch-thumb': {
                    width: 20,
                    height: 20,
                  },
                  '& .MuiSwitch-track': {
                    borderRadius: 18,
                    backgroundColor: row.value ? '#5b56f3' : '#d5dbe5',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Paper>
    );
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
        <Typography sx={{ fontSize: '2.35rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#2d2f38', lineHeight: 1.1 }}>
          Settings
        </Typography>

        <Button
          variant="contained"
          sx={{
            borderRadius: 2.5,
            px: 2.6,
            py: 1.4,
            background: 'linear-gradient(180deg, #5a56f4 0%, #4c48dd 100%)',
            boxShadow: 'none',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1.05rem',
            '&:hover': { background: 'linear-gradient(180deg, #4c48dd 0%, #403dcf 100%)' },
          }}
        >
          Save Changes
        </Button>
      </Box>

      <Box
        sx={{
          display: 'inline-flex',
          p: 0.5,
          bgcolor: '#edf1f8',
          borderRadius: 3,
          mb: 2.5,
          border: '1px solid rgba(148,163,184,0.2)',
        }}
      >
        {TAB_ITEMS.map((item) => {
          const selected = activeTab === item.key;
          return (
            <Button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              variant={selected ? 'contained' : 'text'}
              sx={{
                minWidth: 135,
                borderRadius: 2.2,
                px: 2.2,
                py: 0.9,
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                color: selected ? '#fff' : '#4b5565',
                background: selected ? 'linear-gradient(180deg, #5a56f4 0%, #4c48dd 100%)' : 'transparent',
                boxShadow: 'none',
                '&:hover': {
                  background: selected ? 'linear-gradient(180deg, #4c48dd 0%, #403dcf 100%)' : 'rgba(79,70,229,0.04)',
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>

      {renderContent()}
    </Box>
  );
}

export default SettingsTab;
