import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomLogin from "./login";
import Inbox from "./inbox";
import CommonQuestions from "./commonQuestions";
import CustomTraning from "./training";
import CustomComments from "./comments";
import StockValue from "./stocksValue";
import ContactUs from "./contactUs";
import AndroidApp from "./androidAplication";
import Introducing from "./introducing";
import CustomTick from "./news/CustomTick";
import News from "./news";

const LeftBody = ({ selectedBox }) => {
    return <Container>
        {
            selectedBox === null &&
            <Box>
                <CustomTick />
                <News />
            </Box>

        }
        {
            selectedBox === 0 && <CustomLogin />
        }
        {
            selectedBox === 1 && <Inbox />
        }
        {
            selectedBox === 2 && <CommonQuestions
            />
        }
        {
            selectedBox === 3 && <CustomTraning />
        }
        {
            selectedBox === 4 && <CustomComments />
        }
        {
            selectedBox === 5 && <StockValue />
        }
        {
            selectedBox === 6 && <ContactUs />
        }
        {
            selectedBox === 7 && <AndroidApp />
        }
        {
            selectedBox === 8 && <Introducing />
        }
    </Container>
}

export default LeftBody;