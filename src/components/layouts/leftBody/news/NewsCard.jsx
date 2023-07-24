import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



export default function NewsCard({
    title, description, publishDate, source, link
}) {
    const getLocalDate = (date) => new Date(date).toLocaleString('fa')

    return (
        <Link underline="none" href={link} target="_blank" sx={{ display: 'flex', flexDirection: 'column', maxWidth: '960px', marginX: '' }}>
            <Card sx={{
                padding: '0.75rem',
                // marginY: '1rem', 
                border: '1px solid rgb(160, 160, 160)',
                borderRadius: '4px',
                // margin: '2px',
                fontSize: '1rem',
                fontWeight: 400,
                marginBottom: '12px'
            }}>
                <CardContent>

                    <Typography variant="h5" component="div" sx={{ fontSize: '1rem', fontWeight: 500, color: 'rgb(61, 58, 140)' }}>
                        {title}
                    </Typography>

                    <Typography variant="body2" sx={{ margin: '0.75rem 0rem', fontSize: '1rem', fontWeight: 400 }}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography size="small" sx={{ fontSize: '0.85rem', fontWeight: 'normal', color: 'rgb(198, 40, 40)', textAlign: 'left', flex: '1 1 0%' }}>{source}</Typography>
                    <Typography size="small" sx={{ fontSize: '0.85rem', fontWeight: 'normal', color: 'rgb(90, 90, 90)' }}>{getLocalDate(publishDate)}</Typography>
                </CardActions>
            </Card>
        </Link>
    );
}