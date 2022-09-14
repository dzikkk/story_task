import styled from "@emotion/styled"
import { Delete } from "@mui/icons-material"
import { IconInput } from "./IconInput"
import { TextInput } from "./TextInput"
import { Tile } from "./Tile"

const DeleteIcon = styled(Delete)({
  transition: 'opacity .3s ease-in',
  color: '#a34d52',
  opacity: 0,
  position: 'absolute',
  top: 10,
  right: 10,
})

export const IconTile = ({ tileValue, onValueUpdate, onDelete }) => {
  const handleValueChange = (item) => ({ target }) => {
    onValueUpdate({ ...tileValue, [item]: target.value })
  }

  return (
    <Tile>
      <DeleteIcon className="hidden" sx={{ fontSize: 30 }} onClick={onDelete} />
      <IconInput />
      <TextInput
        variant="h5"
        onChange={handleValueChange('main')}
        value={tileValue.main}
      />
      <TextInput
        variant="body2"
        onChange={handleValueChange('secondary')}
        value={tileValue.secondary}
      />
    </Tile>
  )
}