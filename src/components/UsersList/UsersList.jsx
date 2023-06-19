import { useState, useEffect } from "react"
import { fetchUsers } from "services/fetchUsers";
import { UserCard } from "./UserCard";
import { Wrapper, Box, StyledButton, StyledNavLink } from "./UsersList.styled"

const usersPerPage = 3;


export const UsersList = () => {
    const [next, setNext] = useState(usersPerPage);
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem('users')) ?? [];
      })

    useEffect(() => {
        async function getUsers() {
            try {
                const fetchedUsers = await fetchUsers()
                if(fetchedUsers.length === 0) {
                    alert('Sorry, we did not find any user')
                }
                setUsers(fetchedUsers);
                console.log(fetchedUsers);
            } catch (error) {
                alert('Sorry, something went wrong. Try reloading the page!')
            }
        }
        getUsers()
    }, [])

    const handleMoreUsers = () => {
        setNext(next + usersPerPage);
      };


    return (
        <main>
            <Wrapper>
            <StyledNavLink to='/' key='home'>GO BACK</StyledNavLink>
            <Box>
                {users?.slice(0, next)?.map(item => <UserCard key={item.id} user={item} users={users}/>)}
            </Box>
            <StyledButton type='button' onClick={handleMoreUsers}>LOAD MORE</StyledButton>
            </Wrapper>
        </main>
    )
}