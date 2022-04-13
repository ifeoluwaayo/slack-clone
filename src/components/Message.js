import React from "react";
import styled from "styled-components";

function Message({ message, user, userImage, timestamp }) {
	return (
		<MessageContainer>
			<img src={userImage} alt="Loading..." />

			<MessageInfo>
				<h4>
					{user}
					{""}
					<span>
						{new Date(timestamp?.toDate()).toLocaleTimeString()}
					</span>
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageContainer>
	);
}

export default Message;

const MessageInfo = styled.div`
	padding-left: 10px;

	> h4 > span {
		color: grey;
		font-weight: 300;
		margin-left: 20px;
		font-size: 10px;
	}
`;

const MessageContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;

	> img {
		height: 50px;
		border-radius: 8px;
	}
`;
