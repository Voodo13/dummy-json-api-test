import React, {useEffect, useState} from 'react';
import {Breadcrumb, theme, Typography, Skeleton, Flex, Pagination} from 'antd'
import {postService} from "../../shared/api/postService";
import {Post} from "../../shared/ui";

const {Title} = Typography

const MainPage = () => {
    const [postsData, setPostsData] = useState(null)
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const getPosts = async (number = 1, limit = 10) => {
        const postsData = await postService.getAll(number, limit)
        setPostsData(postsData)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <Title>main page</Title>

            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <div
                style={{
                    padding: 24,
                    minHeight: 380,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    margin: '0 0 24px'
                }}
            >
                <Flex vertical gap="large">
                    {postsData &&
                        postsData.posts.map(post => <Post post={post} key={post.id}/>)


                    }
                    <Skeleton active loading={!postsData} paragraph={{rows: 6}}/>
                    <Pagination
                        align="end"
                        defaultCurrent={1}
                        total={postsData && postsData.total}
                        pageSizeOptions={[10, 20, 30, 40, 50]}
                        onChange={getPosts}
                    />
                </Flex>
            </div>

        </>
    );
};

export default MainPage;
