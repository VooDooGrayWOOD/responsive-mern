import { Box, Typography, useTheme } from '@mui/material'
import Friend from 'components/Friend'
import WidgetWrapper from 'components/WidgetWrapper'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from 'state'

const FriendListWidget = ({ userId }) => {
    const dispatch = useDispatch()
    const { palette } = useTheme()
    const token = useSelector((state) => state.token)
    const friends = useSelector((state) => state.user.friends)

    const getFriends = async () => {
        const apiUrl =
            process.env.NODE_ENV === 'production'
                ? `https://responsive-mern.voodoograywood.ru/users/${userId}/friends`
                : `http://localhost:3001/users/${userId}/friends`
        const response = await fetch(`${apiUrl}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = await response.json()
        await dispatch(setFriends({ friends: data }))
    }

    useEffect(() => {
        getFriends()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <WidgetWrapper>
            <Typography
                color={palette.neutral.dark}
                variant="h5"
                fontWeight="500"
                sx={{ mb: '1.5rem' }}
            >
                Friend List
            </Typography>
            <Box display="flex" flexDirection="column" gap="1.5rem">
                {friends.map((friend, index) => (
                    <Friend
                        key={index}
                        friendId={friend._id}
                        name={`${friend.firstName} ${friend.lastName}`}
                        subtitle={friend.occupation}
                        userPicturePath={friend.picturePath}
                    />
                ))}
            </Box>
        </WidgetWrapper>
    )
}

export default FriendListWidget
