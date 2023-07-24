import Box from "@mui/material/Box";
import './Layouts.css'
import RightNavbar from "./rightnavbar/RightNavbar";
import CustomAppBar from "./customAppBar/CustomAppBar";
import News from "./leftBody/news";
import CustomTick from "./leftBody/news/CustomTick";
import TabPanels from "./rightBody/TabPanels";
import { useState } from "react";
import Container from "@mui/material/Container";
import LeftBody from "./leftBody/LeftBody";

const Layouts = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [isRightPanelVisible, setRightPanelVisibility] = useState(true)
    const [selectedBox, setSelectedBox] = useState(null)


    return (
        <Box>

            <Box className='navbar' >
                <Box className='right' sx={{ borderRight: '1px solid #ccc' }} >
                    <RightNavbar
                        activeTab={activeTab}
                        onSelectTab={setActiveTab}
                        isRightPanelVisible={isRightPanelVisible}
                        showRightPanel={() => setRightPanelVisibility(true)}
                        hideRightPanel={() => setRightPanelVisibility(false)}
                    />
                </Box>
                <Box className='left' sx={{ paddingLeft: '400px' }} ><CustomAppBar onSelectBox={setSelectedBox} /></Box>
            </Box>
            <Box className='body' >
                <Box className='right' sx={{ borderRight: isRightPanelVisible ? '1px solid #ccc' : 'none' }} >
                    {
                        isRightPanelVisible && <TabPanels activeTab={activeTab} />
                    }
                </Box>
                <Box className='left' sx={{
                    display: 'flex', flexDirection: 'column', paddingLeft: isRightPanelVisible ? '400px' : '0px',
                    // marginX:'70px'
                }}>
                    {/* <CustomTick />
                    <News /> */}
                    <LeftBody selectedBox={selectedBox} />
                </Box>
            </Box>
        </Box>

    )
}

export default Layouts;