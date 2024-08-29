import useModal from '../components/custom/useModal';
import Modal from '../components/Modal';
import React, { useEffect, useState } from 'react';
import supabase from '../components/Supabase';
import styled from 'styled-components';

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

const Category = styled.div`
    border: 1px black solid;
`;

const Follower = styled.div`
    border: 1px black solid;
`;

const FeedsSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #aaa;
`;

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
                    <Modal $isOpen={isModalOpen} toggleModal={toggleModal} $width="40%" $height="80%">
                        {/* 보여줄 컴포넌트 자리 */}
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'blue'
                            }}
                        ></div>
                    </Modal>
                )}
            </div>
            <Container>
                <Category>카테고리</Category>
                <FeedsSection>
                    {feeds.map((feed) => {
                        return (
                            <article key={feed.id}>
                                <Feed>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={feed.author_profile_url}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%'
                                            }}
                                        />
                                        <p>{feed.author_name}</p>
                                    </div>
                                    <div onClick={toggleModal}>
                                        <h3>{feed.title}</h3>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            <div>{feed.category_region}</div>
                                            <div>{feed.category_tag}</div>
                                        </div>

                                        <p>{feed.content}</p>
                                        <p>{feed.date}</p>
                                    </div>
                                </Feed>
                            </article>
                        );
                    })}
                </FeedsSection>
                <Follower>팔로우</Follower>
                <Btn>작성</Btn>
            </Container>
        </>
    );
};

export default Home;
