import { Box, TableCell, TableRow, Typography, styled } from '@mui/material'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import { FC, useMemo } from 'react'

const TableCellTypo = styled(Typography)({
  fontSize: '14px',
  fontWeight: '400',
  color: '#060606',
})

const StatusWrapper = styled(Box)({
  borderRadius: '20px',
  minHeight: '25px',
})

type Props = {
  data: {
    name: string
    pm: string
    date: string
    status: string
    progress: number
    enum: string
  }
}

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  const progressColor = useMemo(() => {
    if (props.value < 50) {
      return '#EE201C'
    } else if (props.value < 80) {
      return '#E65F2B'
    } else if (props.value < 100) {
      return '#E5AE21'
    }
    return '#1A932E'
  }, [props.value])
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={100} style={{ color: '#00000014' }} thickness={6} />
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{ color: progressColor, position: 'absolute', left: 0 }}
        thickness={6}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography fontSize="8px" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export const ProjectTableItem: FC<Props> = ({ data }) => {
  const background = useMemo(() => {
    if (data.enum == 'completed') {
      return '#1A932E2E'
    }
    if (data.enum == 'delayed') {
      return '#E2B1332E'
    }
    if (data.enum == 'on_going') {
      return '#E65F2B2E'
    }
    return '#EE201C2E'
  }, [data])
  const color = useMemo(() => {
    if (data.status == 'Completed') {
      return '#1A932E'
    }
    if (data.status == 'Delayed') {
      return '#DFA510'
    }
    if (data.status == 'On going') {
      return '#E65F2B'
    }
    return '#EE201C'
  }, [data])
  return (
    <TableRow hover>
      <TableCell align="left">
        <TableCellTypo>{data.name}</TableCellTypo>
      </TableCell>
      <TableCell align="left">
        <TableCellTypo>{data.pm}</TableCellTypo>
      </TableCell>
      <TableCell align="left">
        <TableCellTypo>{data.date}</TableCellTypo>
      </TableCell>
      <TableCell align="center">
        <StatusWrapper sx={{ background: background }}>
          <TableCellTypo sx={{ color: color }}>{data.status}</TableCellTypo>
        </StatusWrapper>
      </TableCell>
      <TableCell align="left">
        <Box display="flex" justifyContent="center">
          <CircularProgressWithLabel value={data.progress} />
        </Box>
      </TableCell>
    </TableRow>
  )
}
