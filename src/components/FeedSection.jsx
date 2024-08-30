import styled from 'styled-components';
import useModal from './custom/useModal';
import Modal from './Modal';

const FeedSection = ({ feeds }) => {
    const { isModalOpen, toggleModal } = useModal();
    console.log(feeds);

    return (
        <>
            <FeedSection_Wrapper>
                {feeds.map((feed) => {
                    return (
                        <Feed key={feed.id}>
                            <User_Container>
                                <img src={feed.author_profile_url} />
                                <p>{feed.author_name}</p>
                            </User_Container>
                            <Content_Container onClick={toggleModal}>
                                <h3>{feed.title}</h3>
                                <Category_Wrapper style={{}}>
                                    <div>{feed.category_region}</div>
                                    <div>{feed.category_tag}</div>
                                </Category_Wrapper>
                                <img src={feed.img_url} />
                                <p>{feed.content}</p>
                                <p>{feed.date}</p>
                            </Content_Container>
                        </Feed>
                    );
                })}
            </FeedSection_Wrapper>
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
        </>
    );
};

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #aaa;
`;

const FeedSection_Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const User_Container = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

const Content_Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Category_Wrapper = styled.div`
    display: 'flex';
    align-items: 'center';
    gap: '10px';
`;
export default FeedSection;
