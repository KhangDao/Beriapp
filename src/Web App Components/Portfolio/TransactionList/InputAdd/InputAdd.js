import {useState} from "react"
import {Box,Grid,Button,Typography,} from "@mui/material"
import {TextField,InputLabel,MenuItem,FormControl,Select} from "@mui/material"
import { bgcolor } from "@mui/system";

const InputAdd =(props)=>{

    {/* Chỗ này là css cho 2 nút [SAVE] vs [CANCEL] */}
    const btnStyle={
        color: 'white',
        bgcolor: 'darkgreen',
        border: '2px solid darkgreen',
        '&:hover': {
            bgcolor:'#00ff49',
            color:'darkgreen'},
    };

    const [list,setList] = useState([]);

    const [note,setNote] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState();
    const [type,setType] = useState("Expense");

    const changeNote =(e)=>{
        setNote(e.target.value)
    };
    const changeAmount =(e)=>{
        setAmount(e.target.value)
    };
    const changeDate =(e)=>{
        setDate(e.target.value)
    };
    const selectType =(e)=>{
        setType(e.target.value)
    };

    const handleOnClickSave =()=>{
        if (note && date && amount && type){
            let dmy = date.split("-");
            let day = Number.parseInt(dmy[0],10);
            let month = Number.parseInt(dmy[1],10);
            let year = Number.parseInt(dmy[2],10);
            const newTransaction = {
                note: note,
                day: day,
                month: month,
                year: year,
                amount: amount,
                type: type,
            };
            setList([...list,newTransaction]);
        };

        setNote("");
        setAmount(0);
        setDate("");
        setClosed(false);
    };

    const [closed,setClosed] = useState(true);
    const handleOnClickClose =()=>{
        setClosed(false)
    };

    if (closed){
    return(
        <Box sx={{
            width:'70%',
            height: '60%',
            color: 'darkgreen',
            backgroundColor:'#bacfc4',
            borderRadius:'20px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap:'20px',
            }}>
            
            <Typography variant="h5">Username</Typography>

            <Grid sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent:'center',
                flexWrap:'wrap',
                flexGrow:1,
                gap:'20px'}}>

                <FormControl sx={{width: '20%',}}>
                    <InputLabel id="demo-simple-select-label" >Loại giao dịch</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        
                        value={type}
                        label="Type"
                        onChange={selectType}
                    >
                        <MenuItem value={"Expense"}>Chi tiêu</MenuItem>
                        <MenuItem value={"Income"}>Thu nhập</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="note"
                    label="Nhập ghi chú"

                    sx={{width: '70%'}}

                    type="text"
                    InputLabelProps={{shrink: true,}}
                    onChange={changeNote}
                    value={note}/>

                <TextField
                    id="date"
                    label="Ngày giao dịch"
                    type="date"
                    InputLabelProps={{shrink: true,}}
                    onChange={changeDate}
                    value={date}/>
                
                <TextField
                    id="amount"
                    label="Số tiền"
                    type="number"
                    InputLabelProps={{shrink: true,}}
                    onChange={changeAmount}
                    value={amount}/>
            </Grid>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'flex-end',
                gap: '15px'}}>

                <Button sx={btnStyle} onClick={handleOnClickSave}>SAVE</Button>
                <Button sx={btnStyle} onClick={handleOnClickClose}>CANCEL</Button>
            </Box>

        </Box>
    )}
}

export default InputAdd