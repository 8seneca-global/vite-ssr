import Facebook from '#root/components/social-sharing/Facebook'
import LinkedIn from '#root/components/social-sharing/LinkedIn'
import Twitter from '#root/components/social-sharing/Twitter'
import useNotification from '#root/hooks/useNotification'
import { linearGradientColor } from '#root/themes/theme'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import { FC } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

type Props = {
  open: boolean
  setIsConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledTextField = styled(TextField)({
  marginBottom: '12px',
  marginTop: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
})

const StyledButton = styled(Button)({
  borderRadius: '70px',
  minWidth: '100px',
  background: linearGradientColor,
  display: 'flex',
  alignItems: 'center',
})

export const JobSharingSocialDialog: FC<Props> = ({ open, setIsConfirmDialogOpen }) => {
  const { showNotification } = useNotification()
  const [_value, copy] = useCopyToClipboard()
  return (
    <Dialog open={open} onClose={setIsConfirmDialogOpen} sx={{ width: '100%', borderRadius: '24px' }}>
      <DialogTitle>Share Job Description</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" fontSize="16px">
          Do you want to share the link bellow ?
        </Typography>
        <StyledTextField
          placeholder={window.location.href}
          type="text"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  copy(window.location.href)
                  showNotification({ msg: 'Copied!', variant: 'success' })
                }}>
                <ContentCopyIcon />
              </IconButton>
            ),
          }}
        />
        <Typography variant="subtitle2" fontSize="16px">
          Or you can choose sharing option
        </Typography>
        <Box display="flex" justifyContent="space-around" marginTop="24px">
          <LinkedIn />
          <Facebook />
          <Twitter />
        </Box>
      </DialogContent>
      <DialogActions>
        <StyledButton variant="contained" autoFocus onClick={() => setIsConfirmDialogOpen(false)}>
          Done
        </StyledButton>
      </DialogActions>
    </Dialog>
  )
}
