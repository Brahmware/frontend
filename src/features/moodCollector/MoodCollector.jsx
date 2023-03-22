import { Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FeedbackReaction } from '../../components/feedback-reaction';

const MoodCollector = ({ children }) => {

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="how-do-you-feel-today"
                aria-describedby="Collecing data about your mood"
            /* sx={{ backdropFilter: 'blur(2px)' }} */
            >
                <Box
                    width={'100%'}
                    height={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'2em'}
                    onClick={handleClose}
                >
                    <Typography
                        component={'h3'}
                        fontSize={'2em'}
                        fontWeight={'bold'}
                    >
                        How Do you Feel Today?
                    </Typography>
                    <FeedbackReaction />
                </Box>
            </Modal>
            {children}
        </div>
    )
}

export default MoodCollector