declare const query: {
    query: string;
    variables: {
        categoryId: any;
        filialIds: any;
        coordinates: any;
        pagingInfo: {
            offset: number;
            limit: number;
        };
        onlyActive: boolean;
        pageSlug: string;
        random: boolean;
    };
};
export default query;
