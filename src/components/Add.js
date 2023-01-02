import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal,styled, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React,{useState} from 'react'



const Add = () => {
    const [open,setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        gap:"10px",
        marginBottom:"20px"
    })

  return (
    <>
     <Tooltip 
     onClick={(e)=>{setOpen(true)}}
      title="Add"
       sx={{position:"fixed", bottom:20, left:{xs:"calc(50% -25px)",md:30}}}
       >
        <Fab>
       <AddIcon/>
       </Fab>
     </Tooltip>
    
<StyledModal
  open={open}
  onClose={setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"}  color={"text.primary"} border-radius ={5}>
    <Typography id="modal-modal-title" color="gray" variant="h6">
      Create Post
    </Typography>
    <UserBox>
        <Avatar src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress" sx={{width:30,height:30}}/>
        <Typography fontWeight={500} variant="span">Johnny D.</Typography>
    </UserBox>

    <TextField
     id="standard-multiline-static"
     label="Multiline"
     multiline
     rows={3}
     placeholder="what's on your mind"
     variant="standard"
     sx={{width:"100%"}}
    />
    <Stack direction="row" gap={1} mt={2} mb={3}>
     <EmojiEmotions color="primary"/>
     <Image color="secondary"/>
     <VideoCameraBack color="success"/>
     <PersonAdd color="error"/>
    </Stack>

    <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <Button>Post</Button>
    
     <Button sx={{width:"100px"}}><DateRange/></Button>
   </ButtonGroup>
    
  </Box>
</StyledModal>
   </>
  )
}

export default Add