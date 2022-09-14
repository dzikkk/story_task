
import { Box, Button, Container, Modal } from '@mui/material';
import styled from "@emotion/styled"
import Adb from '@mui/icons-material/Adb';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import Diamond from '@mui/icons-material/Diamond';
import Face from '@mui/icons-material/Face';
import Festival from '@mui/icons-material/Festival';
import Headset from '@mui/icons-material/Headset';
import MiscellaneousServices from '@mui/icons-material/MiscellaneousServices';
import PedalBike from '@mui/icons-material/PedalBike';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SatelliteAlt from '@mui/icons-material/SatelliteAlt';
import { useState } from 'react';

const icons = {
  adb: Adb,
  access: AccessAlarm,
  diamond: Diamond,
  face: Face,
  Festival: Festival,
  headset: Headset,
  misc: MiscellaneousServices,
  bike: PedalBike,
  camera: PhotoCamera,
  satellite: SatelliteAlt,
}

const CustomGrid = styled(Box)({
  display: 'inline-grid',
  columnGap: 10,
  rowGap: 10,
  gridTemplateColumns: '1fr 1fr 1fr 1fr ',
  marginBottom: 30,
});

const CustomFlex = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
  backgroundColor: '#3d3838c9',
});

export const IconInput = ({ value }) => {
  const [isEditing, setIsEditiong] = useState(false);
  const [selectedIcon, setIcon] = useState('face');

  const ActiveIcon = icons[selectedIcon];
  const handleIconChange = name => {
    setIcon(name);
    setIsEditiong(!isEditing);
  }
  const closeModal = () => {
    setIsEditiong(!isEditing);
  }

  return (
    <>
      <ActiveIcon sx={{ fontSize: 140 }} onClick={() => setIsEditiong(true)} />
      <Modal
        open={isEditing}
        onClose={() => setIsEditiong(false)}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}  
      >
        <CustomFlex>
          <CustomGrid >
            {Object.keys(icons).map(iconName => {
              const Icon = icons[iconName];
              return (<Icon style={{color: '#f8f7f7bd'}} sx={{ fontSize: 140 }} key={iconName} onClick={() => handleIconChange(iconName)} />)
            })}
          </CustomGrid>
          <Button variant="contained" onClick={closeModal} color="primary">Close</Button>
        </CustomFlex>
      </Modal>
    </>
  )
}