import styled from "@emotion/styled";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { AddTile } from "../components/AddTile";
import { IconTile } from "../components/IconTile";
import { TextInput } from "../components/TextInput";

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const CustomGrid = styled.div({
  display: 'inline-grid',
  columnGap: 10,
  rowGap: 10,
  gridTemplateColumns: 'repeat(6, 1fr)',
  marginBottom: 30,
});

const initTile = (title) => ({
  main: null,
  secondary: null,
  icon: null,
  name: title,
});

export const MainSlide = () => {
  const [title, setTitle] = useState('Insert title here');
  const [tiles, setTiles] = useState([initTile('tile-1'), initTile('tile-2')]);
  const [prePrinting, setPrePrinting] = useState(false);
  const pdfRef = useRef();

  const handlePrint = () => {
      const content = pdfRef.current;
      html2canvas(content).then(canv => {
        const img = canv.toDataURL('image/jpeg');
        const doc = new jsPDF('a4');
        const imgProps = doc.getImageProperties(img);
        const width = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * width) / imgProps.width;

        doc.addImage(img, 'JPEG', 0, 0, width, pdfHeight);
        doc.save('inny_test.pdf');
      })
  };


  const updateTile = (idx) => (newValue) => {
    setTiles(prev => {
      const arr = [...prev];
      arr[idx] = newValue;
      return arr;
    });
  }

  const deleteTile = (idx) => () => {
    setTiles(prev => {
      const arr = [...prev];
      arr.splice(idx, 1);
      return arr;
    })
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const addTile = () => {
    const ts = Number(new Date());
    setTiles(prev => prev.concat(initTile(`tile-${ts}`)));
  }

  const handlePrePrint = (isFocused) => () => {
    setPrePrinting(isFocused)
  } 

  return (
    <>
      <Button 
      variant="contained"
      onClick={handlePrint}
      onMouseOver={handlePrePrint(true)}
      onMouseOut={handlePrePrint(false)}
      color="primary">
        Print
      </Button>
      <Wrapper ref={pdfRef}>
        <TextInput variant="h1" value={title} onChange={handleTitleChange} />
        <CustomGrid>
          {tiles.map((tile, idx) => (
            <IconTile
              key={tile.name}
              tileValue={tile}
              onDelete={deleteTile(idx)}
              onValueUpdate={updateTile(idx)}
            />
          ))}
          {!prePrinting ? <AddTile onClick={addTile} /> : false} 
        </CustomGrid>
      </Wrapper>
  </>
  )
  
}