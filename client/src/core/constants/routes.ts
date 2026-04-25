export const ROUTES = {
    HOME: '/',
    LEGAL: {
        PRIVACY_AND_TERMS: '/legal',
        USER_DATA_DELETION: '/legal/user-data-deletion',
    },
    AUTH: {
        LOGIN: '/auth',
        REGISTER: '/register',
        RESET_PASSWORD: '/reset-password/:token',
        VERIFY_EMAIL: '/verify-email/:token',
    },
    USER: {
        PROFILE: '/profile',
    },
    PRODUCTS: {
        LIST: '/products',
        DETAIL: '/product-detail',
        CATEGORIES: '/categories',
        VISUALLY_SIMILAR: '/visually-similar',
    },
    CHECKOUT: {
        MAIN: '/checkout',
        SHIPPING: '/shipping',
        SUCCESS: '/payment-successful',
        FAILED: '/payment-failed',
        PAYOS_SUCCESS: '/checkout/payos/success',
        NOWPAYMENTS_SUCCESS: '/checkout/nowpayments/success',
    },
} as const;
