import React, { useState } from 'react';
import { css } from './utils'

export type MainSectionProps = {
    onAddCard: (description: string) => void;
}


export function MainSection(props: MainSectionProps) {

    var [description,setDescription] = useState("")
    return <section className="jumbotron text-center">
        <div className="container">
            <h1>Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
                <input type="text" value={description} onChange={ev => setDescription(ev.target.value)} />
                <a href="#" className={css("btn","my-2",description !== "" ? "btn-primary" : null)}
                    onClick={() => { if (description === "") return
                    props.onAddCard(description)
                    setDescription("")
                }
                }>Add</a>           
            </p>
        </div>
    </section>
}

