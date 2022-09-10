import styled from "@emotion/styled"
import { IconInput } from "./IconInput"
import { TextInput } from "./TextInput"

const Tile = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const IconTile = ({ tileValue, onValueUpdate }) => {
  const handleValueChange = (item) => ({ target }) => {
    onValueUpdate({ ...tileValue, [item]: target.value })
  }

  return (
    <Tile>
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