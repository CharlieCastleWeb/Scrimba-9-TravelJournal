import React from "react";
import locationLogo from "../assets/location-icon.svg"

export default function Blogpost(props) {
    return (
        <article>
            <img className="postPhoto" src={props.imageUrl} width="125px" height="168px"/>
            <div className="post-content">
                <div className="location-info">
                    <img src={locationLogo} />
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="travel-date"><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
                <p className="post-text">{props.description}</p>
            </div>
        </article>
    )
}