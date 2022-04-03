import { useEffect, useState } from "react"

const useReviewData = () => {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setReviewData(data));
    }, []);
    return [reviewData, setReviewData];
}
export default useReviewData;