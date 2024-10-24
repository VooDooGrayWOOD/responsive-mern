import { Typography, useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import WidgetWrapper from 'components/WidgetWrapper'

const AdwertWidget = () => {
    const { palette } = useTheme()
    const dark = palette.neutral.dark
    const main = palette.neutral.main
    const medium = palette.neutral.medium
    const apiUrl =
        process.env.NODE_ENV === 'production'
            ? `https://responsive-mern.voodoograywood.ru/assets/info4.webp`
            : `http://localhost:3001/assets/info4.webp`
    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src={`${apiUrl}`}
                style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
            />
            <FlexBetween>
                <Typography color={main}>MikaCosmetics</Typography>
                <Typography color={main}>mikacosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to stunning and immaculate beauty and made sure
                your skin is exfolating skin and shining like light.
            </Typography>
        </WidgetWrapper>
    )
}

export default AdwertWidget
