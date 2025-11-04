import {
    Badge,
    Box,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Location } from "../assets/location";
import { CustomButton, CustomIconButton, Searchinput } from "./style";
import { SearchIcon } from "../assets/search-icon";
import { UserIcon } from "../assets/user-icon";
import { LoveIcon } from "../assets/love-icon";
import { SavatIcon } from "../assets/savat-icon";

export default function Header() {
    return (
        <header>
            <Container maxWidth="lg">
                <Stack gap={"60px"} direction={"row"} py={"31px"}>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Box alignItems={"center"} display={"inline-flex"}>
                        <IconButton>
                            <Location />
                        </IconButton>
                        <Typography fontSize={18} variant="body1">
                            Алматы
                        </Typography>
                    </Box>
                    <Box flexGrow={1} position={"relative"}>
                        <Searchinput placeholder="Поиск по товарам" />
                        <CustomIconButton>
                            <SearchIcon />
                        </CustomIconButton>
                    </Box>
                    <Stack direction={"row"} alignItems={"center"}>
                        <CustomButton>
                            <Badge badgeContent={4} color="error">
                                <UserIcon />
                            </Badge>
                        </CustomButton>
                        <CustomButton>
                            <LoveIcon />
                        </CustomButton>
                        <CustomButton>
                            <SavatIcon />
                        </CustomButton>
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"} py={"17px"}>
                    <Link to={"/"}>
                        <Typography>Ковры</Typography>
                    </Link>
                    <Link to={"/"}>
                        <Typography>Коврики</Typography>
                    </Link>
                    <Link to={"/"}>
                        <Typography>Для ванной</Typography>
                    </Link>
                    <Link to={"/"}>
                        <Typography>Дорожки</Typography>
                    </Link>
                    <Link to={"/"}>
                        <Typography>Особенные ковры</Typography>
                    </Link>
                    <Link to={"/"}>
                        <Typography>Центр поддержки</Typography>
                    </Link>
                    <Link to={"/"}>
                        <Typography>Контакты</Typography>
                    </Link>
                </Stack>
            </Container>
        </header>
    );
};
