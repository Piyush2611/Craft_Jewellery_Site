import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import earings from '../assets/earings2.jpg';
import rings from '../assets/goldeninfinitering.jpg';
import skincare from '../assets/cosmatics.jpg';

const blogPosts = [
    {
        id: 1,
        title: 'The Timeless Appeal of Stud Earrings',
        image: earings,
        summary: 'Discover why stud earrings remain a favorite for every woman and how to style them.',
        content: `
Stud earrings have truly stood the test of time and continue to be a staple in every woman’s jewelry collection. Their simple yet elegant design makes them incredibly versatile, perfect for both casual daywear and formal evening occasions. Whether you opt for classic diamonds, pearls, or colorful gemstones, stud earrings add a subtle sparkle without overwhelming your look.

Pairing stud earrings with your outfit is effortless — they complement everything from office attire to wedding gowns. They’re also ideal for layering with other earrings if you have multiple piercings, creating a modern and chic aesthetic. Beyond fashion, stud earrings carry sentimental value for many, often gifted as symbols of love, milestones, or personal achievements.

In essence, stud earrings combine timeless beauty with practicality, making them a must-have accessory that enhances your natural elegance every day.`,
    },
    {
        id: 2,
        title: 'Choosing the Perfect Wedding Ring',
        image: rings,
        summary: 'Your guide to selecting a wedding ring that reflects your love and personality.',
        content: `
Your wedding ring is more than just a piece of jewelry — it’s a symbol of eternal love and commitment. Choosing the perfect ring involves understanding various factors including metal types, setting styles, and personal taste.

Popular metals include classic yellow gold, modern white gold, and durable platinum, each with its own unique qualities and care requirements. The setting of the ring, whether it’s a solitaire, halo, or pave design, will affect both the look and comfort. Consider your lifestyle too — a ring for someone with an active lifestyle might prioritize durability and comfort.

Beyond aesthetics, your wedding ring should reflect your unique love story. Many couples opt for custom engravings or select gemstones that have personal meaning. Take your time exploring different options, try on various styles, and remember that the perfect ring is one that feels meaningful and beautiful to you both.`,
    },
    {
        id: 3,
        title: 'Skincare Before Makeup: AIRA Beauty Tips',
        image: skincare,
        summary: 'Prepare your skin the AIRA way to get the most flawless cosmetic results.',
        content: `
Achieving a flawless makeup look begins with a solid skincare routine, and at AIRA, we believe that healthy skin is the ultimate canvas. Start your routine by cleansing thoroughly to remove impurities and excess oils without stripping natural moisture.

Next, apply a hydrating toner to balance your skin’s pH and prep it for further products. Moisturizing is essential to ensure your skin stays plump and smooth under makeup — choose a moisturizer suited to your skin type for best results.

Don’t forget sunscreen during the day to protect your skin from harmful UV rays, which can cause premature aging and dullness. Lastly, using a primer will help create an even base, prolong makeup wear, and blur imperfections.

By following these steps, you’ll nourish your skin and create a flawless foundation for your makeup, helping you look radiant and confident all day long.`,
    },
];

const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleReadMore = (post) => {
        setSelectedPost(post);
    };

    const handleBack = () => {
        setSelectedPost(null);
    };

    return (
        <Box sx={{ px: { xs: 4, md: 20 }, py: 8, backgroundColor: '#fffaf5', color: '#000' }}>
            {!selectedPost ? (
                <>
                    <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', mb: 5 }}>
                        AIRA Blog
                    </Typography>
                    <Grid container spacing={4}>
                        {blogPosts.map((post) => (
                            <Grid item xs={12} md={4} key={post.id}>
                                <Card
                                    sx={{
                                        height: 350, // uniform fixed height for all cards
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={post.image}
                                        alt={post.title}
                                        sx={{ objectFit: 'cover', width: '100%' }}
                                    />

                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                                            {post.summary}
                                        </Typography>
                                        <Box sx={{ mt: 'auto' }}>
                                            <Button size="small" color="primary" variant="outlined" onClick={() => handleReadMore(post)}>
                                                Read More
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : (
                <>
                    <Button onClick={handleBack} variant="text" sx={{ mb: 2 }}>
                        ← Back to Blog
                    </Button>
                    <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', mb: 3 }}>
                        {selectedPost.title}
                    </Typography>
                    <Box sx={{ mb: 4, textAlign: 'left' }}>
                        <img
                            src={selectedPost.image}
                            alt={selectedPost.title}
                            style={{
                                maxWidth: '300px',
                                width: '100%',
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                        {selectedPost.content}
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default BlogPage;
