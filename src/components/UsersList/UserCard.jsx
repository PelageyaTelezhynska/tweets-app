import {  useEffect, useState } from "react"
import { AvatarWrapper, BackgroundImage, FollowBtn, InfoWrapper, Line, LogoWrapper, StyledLi, UserAvatar, UserInfo } from "./UserCard.styled"
import { LogoIcon } from "icons/Logo"
import { IconCircle } from "icons/Circle"



export const UserCard = ({users, user: {id, user, tweets, followers, avatar}})=> {
    const [followersNum, setFollowersNum] = useState(followers);
    const [follow, setFollow] = useState(false);
    const [usersArr, setUsersArr] = useState(users)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(usersArr));

    }, [usersArr])

const handleFollow = () => {
    if(!follow) {
        setFollow(true);
        setFollowersNum(followersNum + 1)
    } else {
        setFollow(false);
        setFollowersNum(followersNum - 1)
    }
}

    return(
        <StyledLi>
            <LogoWrapper>
                <LogoIcon/>
            </LogoWrapper>
            <BackgroundImage/>
            <Line/>
            <AvatarWrapper>
                <IconCircle/>
            </AvatarWrapper>
            <UserAvatar src={avatar} alt={user}/>
            <InfoWrapper>
                <UserInfo>{tweets} tweets</UserInfo>
                <UserInfo>{followersNum.toLocaleString('en-US')} followers</UserInfo>
            </InfoWrapper>
            <FollowBtn type='button' onClick={handleFollow} className={follow? 'active': null}>{follow? 'following': 'follow'}</FollowBtn>
        </StyledLi>
    )
}
