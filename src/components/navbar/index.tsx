import { useNavigate } from "react-router-dom";
import { NavbarContainer, Title, Collumn, ButtonLogout } from "./style";
import { RxExit } from "react-icons/rx";
import { toast } from "react-toastify";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('token', '');
        navigate('/login')
        toast.success("Adeus");
    }

    return (
        <NavbarContainer>
            <Collumn>
                <Title>Os Financeiros</Title>
            </Collumn>
            <Collumn style={{ justifyContent: 'flex-end' }}>
                <ButtonLogout onClick={logout}>
                    <RxExit size={25} color="white" />
                </ButtonLogout>
            </Collumn>
        </NavbarContainer>
    );
}

export default Navbar;