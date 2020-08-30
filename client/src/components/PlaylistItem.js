import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled(Link)`
	display: flex;
	justify-content: space-between;
	text-decoration: none;
	background-color: var(--color-primary);
	padding: 1rem;

	&:hover {
		background-color: var(--color-background);
	}
`;

const Title = styled.h3`
	font-size: 1.6rem;
	font-weight: 400;
	color: var(--color-text);
	margin: 0.5rem 1.5rem;
	line-height: 1.4;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Button = styled.button`
	background-color: transparent;
	outline: none;
	border: none;
	padding: 0.5rem;
	color: ${(props) => props.isFav ? 'red' : 'none'};

	&:hover {
		background-color: #a8a5a5;
		opacity: 0.8;
		border-radius: 1rem;
	}
`;

const PlaylistItem = ({ id, name, tracks, isFav, handleDelete, handleFav }) => {
	return (
		<Wrapper to={`/playlists/${id}`}>
			<Title>{name}</Title>
			<ButtonWrapper>
			<Button onClick={handleFav} isFav={isFav}>
				<FontAwesomeIcon icon="heart" />
			</Button>
			<Button onClick={handleDelete}>
				<FontAwesomeIcon icon="trash" />
			</Button>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default PlaylistItem;
