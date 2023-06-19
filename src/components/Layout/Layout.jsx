import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from "components/AppBar/AppBar"
import { Container } from 'components/Container';

export const Layout = () => {
 return (
    <>
        <AppBar/>
        <Container >
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    </>
 )
}