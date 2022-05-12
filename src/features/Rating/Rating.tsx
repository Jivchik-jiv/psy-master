import * as React from 'react';
import styles from './Rating.module.css';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { StyledPagination } from '../../common/styledMuiComponents/styledPagination';
import { getStatus } from '../Main/MiniProfile';
import { useSelector } from 'react-redux';
import { selectUser } from '../../common/AuthRedux/thunks';



const Rating = ({ rating }: any) => {
    const itemsPerPage = 6;
    const totalPages = rating.length > itemsPerPage ? Math.ceil(rating.length / itemsPerPage) : 1;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [currentContent, setCurrentContent] = React.useState(rating.slice(0, itemsPerPage));
    const currentUser = useSelector(selectUser);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
      };

      React.useEffect(()=>{
        const currentLoverItem = (( currentPage -1 ) * itemsPerPage);

        setCurrentContent(rating.slice(currentLoverItem, currentLoverItem + itemsPerPage))
      }, [currentPage, rating])

    

    return (
        <div>
            <h1 className={styles.title}>Rating</h1>
            <div className={styles.rating}>
                <Table sx={{ width: 600 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "12%" }}>Place</TableCell>
                            <TableCell sx={{ width: "48%" }}>User</TableCell>
                            <TableCell sx={{ width: "20%" }}>Status</TableCell>
                            <TableCell sx={{ width: "20%" }}>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentContent.map((user: any, index: number) => {
                            return (
                                <TableRow 
                                    key={ user.displayName } 
                                    sx={ currentUser.email === user.email ? {backgroundColor: "#3a3a3a"} : undefined}
                                    >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell >
                                        <img src={user.photoURL} alt="avatar" className={styles.avatar} />
                                        <span>{user.displayName}</span>
                                    </TableCell>
                                    <TableCell>{getStatus(user.points)}</TableCell>
                                    <TableCell>{user.points}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <div className={styles.pagination}>
                    <StyledPagination 
                        count={totalPages} 
                        color="primary" 
                        size="small" 
                        shape="rounded" 
                        page={currentPage} 
                        onChange={handleChange} 
                />
                </div>
                



            </div>
        </div>
    )
}

export default Rating;