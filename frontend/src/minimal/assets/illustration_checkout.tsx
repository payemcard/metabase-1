// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

export default function CheckOutIllustration({ ...other }: BoxProps) {
    const theme = useTheme();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;

    return (
        <Box {...other}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 200 200'
            >
                <path
                    fill='#FBCDBE'
                    d='M169.677 104.722a5.342 5.342 0 006.376-3.122 5.347 5.347 0 00-2.349-6.7l-11.345-12.87-9.595 2.073 13.496 13.219a5.309 5.309 0 00-.019 4.498 5.301 5.301 0 001.396 1.832c.593.502 1.29.867 2.04 1.07z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M132.352 58.644l28.276 35.493 8.619-3.957-33.235-51.742-3.66 20.206zM65.714 194.929a3.1 3.1 0 100-6.202 3.1 3.1 0 000 6.202zM67.969 129.379s7.33-22.273 7.894-23.824c.564-1.55 6.485.987 8.035 1.41 1.551.423 1.128 1.974 1.128 1.974l-7.894 22.837 2.396 1.127 7.33-22.978c4.23-4.37 1.129-4.652 1.129-4.652s-9.022-3.101-12.406-3.383c-3.383-.282-2.114 3.806-2.114 3.806l-8.177 21.709 2.679 1.974z'
                />
                <path
                    fill={PRIMARY_MAIN}
                    d='M85.59 134.736l-.001-.001a8.788 8.788 0 00-4.228-3.241 8.546 8.546 0 00-.212-.076c-3.883-1.358-30.942-8.664-30.942-8.664s-5.357-1.974-7.753 3.383c-2.397 5.357-16.635 49.762-16.635 49.762s27.847 14.892 35.966 16.513a4.878 4.878 0 001.532.121 21.567 21.567 0 004.056-.968 16.975 16.975 0 004.12-1.992l15.789-47.225s2.255-5.216-1.692-7.612z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M85.59 134.736l-.001-.002a8.792 8.792 0 00-4.228-3.24c-.06-.023-.131-.048-.212-.077 1.278 2.239 1.763 5.715 1.763 5.715s-15.507 46.097-16.917 50.467c-1.074 3.331-3.24 4.463-4.21 4.813.5.121 1.018.161 1.532.121a21.644 21.644 0 004.056-.968c.385-.442.726-.92 1.019-1.428 0 0 15.788-47.225 17.198-49.48 1.41-2.256 0-5.921 0-5.921zM56.199 195a3.1 3.1 0 100-6.202 3.1 3.1 0 000 6.202zM26.101 181.96a3.1 3.1 0 10.001-6.202 3.1 3.1 0 000 6.202z'
                />
                <path
                    fill='#FBCDBE'
                    d='M80.767 107.443a5.346 5.346 0 01-4.374-9.672l10.879-13.266 9.663 1.73-13.016 13.69a5.316 5.316 0 01-3.152 7.518zM154.914 165.818l6.739-.106-.811 22.969h-5.927l-.001-22.863z'
                />
                <path
                    fill={PRIMARY_DARK}
                    d='M153.403 186.746l11.673-.001h.001a7.439 7.439 0 017.439 7.439v.242l-19.113.001v-7.681z'
                />
                <path
                    fill='#FBCDBE'
                    d='M110.295 159.726l7.362 4.726-14.726 17.716-4.988-3.203 12.352-19.239z'
                />
                <path
                    fill={PRIMARY_DARK}
                    d='M97.717 176.52l9.823 6.307h.001a7.44 7.44 0 012.24 10.279l-.13.203-16.084-10.325 4.15-6.464z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M107.673 89.59s16.356-54.326 21.613-55.06c5.257-.734 13.726 13.94 13.726 13.94 10.981 14.01 22.304 59.393 22.304 59.393s-18.876 1.181-32.674 8.523c-13.799 7.341-30.083-.372-30.083-.372l5.114-26.424z'
                />
                <path
                    fill={PRIMARY_DARK}
                    d='M121.092 73.336v27.298l-3.213 39.544-16.05 29.912 7.66 5.471 21.887-28.452 8.657-28.252 13.595 62.541 10.213-.73-7.093-86.712-13.461-24.407-22.195 3.787z'
                />
                <path
                    fill={PRIMARY_LIGHT}
                    d='M137.583 46.933c5.107 5.107.365 10.578.365 10.578l5.837 13.132-22.981 6.202-8.032-35.887 5.472-5.836c10.943-.365 10.949-.592 10.949-.592 1.918 1.877 8.39 12.403 8.39 12.403z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M111.72 37.334a9.803 9.803 0 00-2.837 12.522c2.633 5.026 5.465 12.811 4.005 21.358-2.643 15.468-11.114 27.22-15.832 30.993-1.643 1.314-1.7 3.227-1.46 4.601.674 3.838 4.395 8.192 6.969 9.066.173.057.355.086.537.084 4.181.001 14.466-13.315 26.284-39.327 7.361-16.2 2.019-29.19-3.759-37.234a9.805 9.805 0 00-13.78-2.157l-.127.094z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M122.621 52.996L89.432 96.543l-8.754-3.648 31.371-52.893 10.572 12.994zM132.466 29.802h-22.827a1.773 1.773 0 01-1.771-1.77v-9.84a13.186 13.186 0 018.137-12.188 13.185 13.185 0 0118.232 12.188v9.84a1.77 1.77 0 01-1.771 1.77z'
                />
                <path
                    fill='#FBCDBE'
                    d='M132.244 24.543a9.667 9.667 0 00-16.964-9.273 9.667 9.667 0 1016.964 9.273z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M137.356 19.176h-13.958l-.143-2.004-.716 2.004h-2.149l-.284-3.972-1.418 3.972h-4.159v-.197a10.442 10.442 0 0110.43-10.43h1.968a10.44 10.44 0 0110.429 10.43v.197z'
                />
                <path
                    fill={PRIMARY_DARKER}
                    d='M123.284 31.64c-.105-.001-.21-.01-.313-.029l-10.221-1.803V12.916h11.251l-.279.325c-3.875 4.52-.955 11.849 1.13 15.815a1.747 1.747 0 01-.139 1.853 1.756 1.756 0 01-1.429.73z'
                />
            </svg>
        </Box>
    );
}
