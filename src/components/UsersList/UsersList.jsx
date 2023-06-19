import { useState, useEffect } from "react"
import { fetchUsers } from "services/fetchUsers";
import { UserCard } from "./UserCard";
import { Wrapper, Box, StyledButton, StyledNavLink } from "./UsersList.styled"

const usersPerPage = 3;


export const UsersList = () => {
    const [next, setNext] = useState(usersPerPage);
    // const [users, setUsers] = useState(() => {
    //     return JSON.parse(localStorage.getItem('users')) ?? [];
    //   })
      const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            try {
                const fetchedUsers = await fetchUsers()
                setUsers(fetchedUsers);
                console.log(fetchedUsers);
                // localStorage.setItem('users', JSON.stringify(users))
            } catch (error) {
                console.log(error.message);
            }
        }
        getUsers()
    }, [users])

    const handleMoreUsers = () => {
        setNext(next + usersPerPage);
      };


    return (
        <main>
            <Wrapper>
            <StyledNavLink to='/' key='home'>GO BACK</StyledNavLink>
            <Box>
                {users?.slice(0, next)?.map(item => <UserCard key={item.id} user={item}/>)}
            </Box>
            <StyledButton type='button' onClick={handleMoreUsers}>LOAD MORE</StyledButton>
            </Wrapper>
        </main>
    )
}