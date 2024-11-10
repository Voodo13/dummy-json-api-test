import React from 'react';
import {
    DislikeOutlined,
    EyeOutlined,
    LikeOutlined,
    MessageOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Card, Flex, Layout, Typography} from 'antd'
const {Title} = Typography

const IconText = ({icon, text}) => (
    <>
        {React.createElement(icon, {
            style: {
                marginInlineEnd: 8,
            },
        })}
        {text}
    </>
);

export const Post = ({post}) => {
    const postTitle = <div>
        <Title level={3}>
            <a href={`post/${post.id}`}>
                {post.title}
            </a>
        </Title>
    </div>

    return <Card title={postTitle}>
        <div style={{margin: '0 0 24px'}}>
            <p>{post.body}</p>
        </div>
        <Flex wrap gap="large">
            <div>
                <IconText icon={LikeOutlined} text={post.reactions.likes} key="list-vertical-like-o"/>
            </div>
            <div>
                <IconText icon={DislikeOutlined} text={post.reactions.dislikes} key="list-vertical-message"/>
            </div>
            <div>
                <IconText icon={EyeOutlined} text={post.views} key="list-vertical-message"/>
            </div>
            <div>
                <a href={`/user/${post.userId}/posts`}>
                    <IconText icon={UserOutlined} text={'Alan Sloper'} key="list-vertical-message"/>
                </a>
            </div>
        </Flex>
    </Card>
}
