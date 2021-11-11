import gql from "graphql-tag";

export const GET_All_CARS = gql`
    query GetCars {
        cars{
            id
            name
            mileage
            gearType
            gas
            thumbnailUrl
            dailyPrice
            monthlyPrice
        }
    }
`;