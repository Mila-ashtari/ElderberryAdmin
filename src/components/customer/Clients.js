import React, { useState } from "react";

import UserList from "../user/UserList";

// export function RenderLanguages({ languages }) {
//   const [expanded, setExpanded] = useState(false);
//   const classes = useStyles();
//   return (
//     <>
//       <Box className={classes.flexContainer}>
//         <Typography variant="h3" className={classes.h3}>
//           Languages
//         </Typography>
//         <Button onClick={() => setExpanded(!expanded)}>
//           {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         </Button>
//       </Box>
//       <Collapse in={expanded} timeout="auto">
//         <TableContainer component="paper">
//           <Table className={classes.table} aria-label="Languages">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Language</TableCell>
//                 <TableCell align="right">Speaking</TableCell>
//                 <TableCell align="right">Reading</TableCell>
//                 <TableCell align="right">Writing</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {languages.map((item) => {
//                 return (
//                   <TableRow key={item.id}>
//                     <TableCell>{item.language}</TableCell>
//                     <TableCell align="right">
//                       {item.speakingProficiency}
//                     </TableCell>
//                     <TableCell align="right">
//                       {item.readingProficiency}
//                     </TableCell>
//                     <TableCell align="right">
//                       {item.writingProficiency}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Collapse>
//     </>
//   );
// }

function Clients({ clients }) {
  console.log(clients);
 
  return <UserList users={clients} />;
}

export default Clients;
