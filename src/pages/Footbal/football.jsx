// import React, {useEffect, useState} from 'react';
// import { Grid, Container, Typography} from "@mui/material";
// import PocketBase from 'pocketbase';
//
//
// const Football = () => {
//
//     const [loading, setLodaing] = useState(true);
//     const [news, setNews] = useState([]);
//
//     const pb = new PocketBase('https://book-shop.fly.dev');
//
//     const getNews = async () => {
//         const resultList = await pb.collection('Rent').getList(1, 50, {
//             filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
//         });
//
//         setNews(resultList);
//         setLodaing(false);
//     };
//
//     useEffect(()=>{
//         getNews();
//     }, []);
//
//     return (
//         <Container>
//             <Typography
//                 mt={2}
//                 pb={1}
//                 fontWeight={550}
//                 gutterBottom
//                 variant={"h7"}
//                 component={"div"}
//             >
//                 Fields
//             </Typography>
//
//             <Grid container spacing={1.5}>
//                 {!loading ? (
//                     news?.items?.map((e)=>(
//                         <Grid key={e.id} item xs={12} sm={12} md={12}>
//
//                         </Grid>
//
//                     ))
//                 )}
//             </Grid>
//         </Container>
//     );
// };
//
// export default Football;