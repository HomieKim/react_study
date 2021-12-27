import { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
    
    // 대기 중, 완료 결과 ,실패 결과에 대한 상태를 관리합니다.
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const process = async () =>{
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            }catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
    }, deps);

    return [loading, resolved, error];
}