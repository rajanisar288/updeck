import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Loader from './Loader';

export default function RouteLoader() {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigation.state === 'loading') {
            setIsLoading(true);
        } else {
            // Add a small delay to prevent flashing
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [navigation.state]);

    if (!isLoading) return null;

    return <Loader />;
}