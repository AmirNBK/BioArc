import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';


const tabLabels = [
    'طبقه اول بخش روماتولوژی',
    'طبقه اول بخش ارتوپدی',
    'طبقه دوم بخش روماتولوژِی',
    'طبقه دوم بخش کودکان',
    'طبقه دوم بخش ارتوپدی',
];

export default function HospitalBuildingInfo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <div style={{ direction: 'initial' }}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered
                    scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example"
                    variant="scrollable"
                >
                    {tabLabels.map((label, index) => (
                        <Tab key={index} label={label} style={{ fontSize: '16px' }} icon={<ApartmentIcon />} />
                    ))}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}
