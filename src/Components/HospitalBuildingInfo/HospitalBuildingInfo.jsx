import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';
import FloorInfo from './FloorInfo/FloorInfo';

// Function to generate an array of room numbers
const generateRoomNumbers = (count) => {
    // Create an array of length 'count' and map each element to its index plus 1
    return Array.from({ length: count }, (_, index) => index + 1);
};

const HospitalBuildingInfo = ({ tabLabels, BuildingName }) => {
    const [value, setValue] = useState(0); // State to track the currently selected tab index

    const handleChange = (_, newValue) => {
        setValue(newValue); // Update the selected tab when it changes
    };

    // Component to render a tab panel with its content
    const TabPanel = ({ children, index }) => (
        <div
            role="tabpanel"
            hidden={value !== index} // Hide the panel if its index doesn't match the selected tab index
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && ( // Only render the content if the panel is currently selected
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );

    return (
        <div style={{ direction: 'initial' }}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    variant="scrollable"
                >
                    {tabLabels.map((label, index) => (
                        <Tab
                            key={index}
                            label={label}
                            style={{ fontSize: '16px' }}
                            icon={<ApartmentIcon />}
                        />
                    ))}
                </Tabs>
            </Box>
            {tabLabels.map((label, index) => {
                const roomNumbers = generateRoomNumbers(Math.min(index + 1, 5)); // Generate room numbers
                return (
                    <TabPanel key={index} index={index}>
                        <FloorInfo
                            HospitalName={label}
                            roomNumbers={roomNumbers}
                            BuildingName={BuildingName}
                        />
                    </TabPanel>
                );
            })}
        </div>
    );
};

export default HospitalBuildingInfo;
