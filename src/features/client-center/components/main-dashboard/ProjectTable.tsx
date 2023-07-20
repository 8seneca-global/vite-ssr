import { ProjectTableItem } from '#root/features/client-center/components/main-dashboard/ProjectTableItem'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}
const data = [
  {
    name: 'Nelsa web developement',
    pm: 'Om prakash sao',
    date: 'May 25, 2023',
    status: 'Completed',
    progress: 100,
    enum: 'completed',
  },
  {
    name: 'Nelsa web developement',
    pm: 'Om prakash sao',
    date: 'May 25, 2023',
    status: 'Delayed',
    progress: 78,
    enum: 'delayed',
  },
  {
    name: 'Nelsa web developement',
    pm: 'Om prakash sao',
    date: 'May 25, 2023',
    status: 'At risk',
    progress: 35,
    enum: 'at_risk',
  },
  {
    name: 'Nelsa web developement',
    pm: 'Om prakash sao',
    date: 'May 25, 2023',
    status: 'On going',
    progress: 50,
    enum: 'on_going',
  },
  {
    name: 'Nelsa web developement',
    pm: 'Om prakash sao',
    date: 'May 25, 2023',
    status: 'Completed',
    progress: 100,
    enum: 'completed',
  },
]
const tableHeader = [
  {
    label: 'Name',
    width: '210px',
  },
  {
    label: 'Project manager',
    width: '120px',
  },
  {
    label: 'Due date',
    width: '70px',
  },
  {
    label: 'Status',
    width: '85px',
  },
  {
    label: 'Progress',
    width: '60px',
  },
]

export const ProjectTable: FC<Props> = () => {
  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: '60%' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {tableHeader.map(item => (
                  <TableCell
                    key={item.label}
                    align={item.label == 'Progress' ? 'center' : 'left'}
                    style={{ minWidth: item.width }}>
                    <Typography fontSize="14px" fontWeight="bold" color="black">
                      {item.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(data => (
                <ProjectTableItem key={data.name} data={data} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
