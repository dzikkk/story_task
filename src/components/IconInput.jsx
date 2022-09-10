
import { Box, Modal, Typography, Icon } from '@mui/material';
import styled from "@emotion/styled"
import Face from '@mui/icons-material/Face';
import Adb from '@mui/icons-material/Adb';

import { useState } from 'react';

const CustomBox = styled(Box)({
  maxWidth: 500,
  maxHeight: 500,
  display: 'flex',
});

export const IconInput = ({ value, onChange }) => {
  const [isEditing, setIsEditiong] = useState(false);

  return (
    <>
      <Face sx={{ fontSize: 140 }} onClick={() => setIsEditiong(true)} />
      <Modal
        open={isEditing}
        onClose={() => setIsEditiong(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomBox flex >
          <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Adb sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          {/* <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} />
          <Face sx={{ fontSize: 140 }} onClick={() => onChange(true)} /> */}
        </CustomBox>
      </Modal>
    </>
  )
}