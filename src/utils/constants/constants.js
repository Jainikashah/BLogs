export const showAllList = [
    { key: "recentIncomes", label: "Only Incomes", msg: "Only Incomes" },
    { key: "recentExpenses", label: "Only Expenses", msg: "Only Expenses" },
    { key: "showAll", label: "Incomes and Expenses", msg: "Incomes and Expenses", default: true }
]

export const paymentList = [
    { key: "all", label: "All", msg: "Payment Mode", default: true },
    { key: "cash", label: "Cash", msg: "Cash" },
    { key: "bank", label: "Bank", msg: "Bank" },
    { key: "wallet", label: "Wallet", msg: "Wallet" },
]

export const moreOptionsList = [
    { key: "export", label: "Export", msg: "Export" },
    { key: "delete", label: "Delete", msg: "Delete" }
]
export const balanceList = [
    { key: "total", label: "Total", msg: "Total Running Balance", default: true },
    { key: "cash", label: "Cash", msg: "Total Cash Balance" },
    { key: "bank", label: "Bank", msg: "Total Bank Balance" },
    { key: "wallet", label: "Wallet", msg: "Total Wallet Balance" },
];

export const amountCompareList = [
    {
        key: "greaterThan", label: "greater than", msg: "Amount #SIGN #VALUE"
    }
]

export const incomeDdlList = [
    { key: "currentMonth", label: "Current Month", default: true, msg: "Current Month's Income" },
    { key: "currentYear", label: "Current Year", msg: "Current Year's Income" },
    {
        key: "customDate", label: "Custom Date", hasSubMenu: true, msg: "#DATE Income",
        children: {
            isCombined: true,
            data: [{
                key: "month",
                label: "Month",
                hasSubMenu: true,
                children: [
                    {
                        key: "january",
                        label: "Jan",
                        msg: "Jan"
                    },
                    {
                        key: "february",
                        label: "Feb",
                        msg: "Feb"
                    },
                    {
                        key: "march",
                        label: "Mar",
                        msg: "Mar"
                    },
                    {
                        key: "april",
                        label: "Apr",
                        msg: "Apr"
                    },
                    {
                        key: "may",
                        label: "May",
                        msg: "May"
                    }
                ]
            },
            {
                key: "year",
                label: "Year",
                hasSubMenu: true,
                children: [
                    {
                        key: "2022",
                        label: "2022",
                        msg: "2022"
                    },
                    {
                        key: "2023",
                        label: "2023",
                        msg: "2023"
                    }
                ]
            }
            ]
        }
    },
];


export const expenseDdlList = [
    { key: "currentMonth", label: "Current Month", default: true, msg: "Current Month's Expense" },
    { key: "currentYear", label: "Current Year", msg: "Current Year's Expense" },
    {
        key: "customDate", label: "Custom Date", hasSubMenu: true, msg: "#DATE Expense",
        children: {
            isCombined: true,
            data: [
                {
                    key: "month",
                    label: "Month",
                    hasSubMenu: true,
                    children: [
                        {
                            key: "january",
                            label: "Jan",
                            msg: "Jan"
                        },
                        {
                            key: "february",
                            label: "Feb",
                            msg: "Feb"
                        },
                        {
                            key: "march",
                            label: "Mar",
                            msg: "Mar"
                        },
                        {
                            key: "april",
                            label: "Apr",
                            msg: "Apr"
                        },
                        {
                            key: "may",
                            label: "May",
                            msg: "May"
                        }
                    ]
                },
                {
                    key: "year",
                    label: "Year",
                    hasSubMenu: true,
                    children: [
                        {
                            key: "2022",
                            label: "2022",
                            msg: "2022"
                        },
                        {
                            key: "2023",
                            label: "2023",
                            msg: "2023"
                        }
                    ]
                }
            ]
        }
    },
];


export const profitDdlList = [
    { key: "currentMonth", label: "Current Month", default: true, msg: "Current Month's Net profit" },
    { key: "currentYear", label: "Current Year", msg: "Current Year's Net Profit" },
    {
        key: "customDate", label: "Custom Date", hasSubMenu: true, msg: "#DATE Net Profit",
        children: {
            isCombined: true,

            data: [{
                key: "month",
                label: "Month",
                hasSubMenu: true,
                children: [
                    {
                        key: "january",
                        label: "Jan",
                        msg: "Jan"
                    },
                    {
                        key: "february",
                        label: "Feb",
                        msg: "Feb"
                    },
                    {
                        key: "march",
                        label: "Mar",
                        msg: "Mar"
                    },
                    {
                        key: "april",
                        label: "Apr",
                        msg: "Apr"
                    },
                    {
                        key: "may",
                        label: "May",
                        msg: "May"
                    }
                ]
            },
            {
                key: "year",
                label: "Year",
                hasSubMenu: true,
                children: [
                    {
                        key: "2022",
                        label: "2022",
                        msg: "2022"
                    },
                    {
                        key: "2023",
                        label: "2023",
                        msg: "2023"
                    }
                ]
            },
            ]
        }
    },
];


export const topIncomesList = [
    {
        key: "TopIncomes",
        label: "Top Incomes",
        default: true,
        msg: "Top Incomes of #DATE",
        hasSubMenu: true,
        children: {
            data: [
                { key: "currentMonth", label: "Current Month", default: true, msg: "Current Month's Net profit" },
                { key: "currentYear", label: "Current Year", msg: "Current Year's Net Profit" },
                {
                    key: "customDate", label: "Custom Date", hasSubMenu: true, msg: "#DATE Net Profit",
                    children: {
                        isCombined: true,
                        data: [
                            {
                                key: "month",
                                label: "Month",
                                hasSubMenu: true,
                                children: [
                                    {
                                        key: "january",
                                        label: "Jan",
                                        msg: "Jan"
                                    },
                                    {
                                        key: "february",
                                        label: "Feb",
                                        msg: "Feb"
                                    },
                                    {
                                        key: "march",
                                        label: "Mar",
                                        msg: "Mar"
                                    },
                                    {
                                        key: "april",
                                        label: "Apr",
                                        msg: "Apr"
                                    },
                                    {
                                        key: "may",
                                        label: "May",
                                        msg: "May"
                                    }
                                ]
                            },
                            {
                                key: "year",
                                label: "Year",
                                hasSubMenu: true,
                                children: [
                                    {
                                        key: "2022",
                                        label: "2022",
                                        msg: "2022"
                                    },
                                    {
                                        key: "2023",
                                        label: "2023",
                                        msg: "2023"
                                    }
                                ]
                            }
                        ]
                    }
                },
            ]
        }
    },


    {
        key: "TopExpenses",
        label: "Top Expenses",
        default: true,
        msg: "Top Expenses of #DATE",
        hasSubMenu: true,
        children: {
            data: [
                { key: "currentMonth", label: "Current Month", default: true, msg: "Current Month's Net profit" },
                { key: "currentYear", label: "Current Year", msg: "Current Year's Net Profit" },
                {
                    key: "customDate", label: "Custom Date", hasSubMenu: true, msg: "#DATE Net Profit",
                    children: {
                        isCombined: true,
                        data: [
                            {
                                key: "month",
                                label: "Month",
                                hasSubMenu: true,
                                children: [
                                    {
                                        key: "january",
                                        label: "Jan",
                                        msg: "Jan"
                                    },
                                    {
                                        key: "february",
                                        label: "Feb",
                                        msg: "Feb"
                                    },
                                    {
                                        key: "march",
                                        label: "Mar",
                                        msg: "Mar"
                                    },
                                    {
                                        key: "april",
                                        label: "Apr",
                                        msg: "Apr"
                                    },
                                    {
                                        key: "may",
                                        label: "May",
                                        msg: "May"
                                    }
                                ]
                            },
                            {
                                key: "year",
                                label: "Year",
                                hasSubMenu: true,
                                children: [
                                    {
                                        key: "2022",
                                        label: "2022",
                                        msg: "2022"
                                    },
                                    {
                                        key: "2023",
                                        label: "2023",
                                        msg: "2023"
                                    }
                                ]
                            }
                        ]
                    }
                },
            ]
        }
    },

];


