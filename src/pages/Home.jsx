import useModal from '../components/custom/useModal';
import Modal from '../components/Modal';
import { useEffect, useState } from 'react';
import supabase from '../components/Supabase';
import styled from 'styled-components';
import Preview from '../components/Preview';
import Category from '../components/Category';
import FeedSection from '../components/FeedSection';

const Btn = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 25%;
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Home = () => {
    const { isModalOpen, toggleModal } = useModal();

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('feed').select('*');
            if (error) {
                console.log('error => ', error);
            } else {
                console.log('data => ', data);
                setFeeds(data);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                <button onClick={toggleModal}>모달 열기</button>
                {isModalOpen && (
                    <Modal $isOpen={isModalOpen} toggleModal={toggleModal} $width="70%" $height="70%">
                        {/* 보여줄 컴포넌트 자리 */}
                        <Preview
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'blue'
                            }}
                        ></Preview>
                    </Modal>
                )}
            </div>
            <Container>
                <Category>카테고리</Category>
                <FeedSection feeds={feeds} />
                <Follower>팔로우</Follower>
                <Btn>작성</Btn>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: auto;
    height: auto;
    margin: auto;
    display: grid;
    grid-template-columns: 2.5fr 7fr 3fr;
    width: 1250px;
    justify-content: center;
    position: relative;
    column-gap: 60px;
    padding: 8px 16px;
`;

const Follower = styled.div`
    border: 1px black solid;
`;

export default Home;
