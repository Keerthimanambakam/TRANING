url = `http://localhost:3001/products`
function LOAD() {
    $.ajax({
        url: url,
        type: 'GET',
        success: (posRes) => {
            console.log(posRes)
            x = ''
            x = x + `
            <table border = 1px
                cellpadding = 10px
                cellspacing = 10px
                align = center>


                <thead>
                    <tr>
                        <th>id</th>
                        <th>p_id</th>
                        <th>p_name</th>
                        <th>p_cost</th>
                    </tr>
                </thead>
                <tbody>
            `
            for (let i = 0; i < posRes.length; i++) {
                x = x + `
                    <tr>
                        <td>${posRes[i].id}</td>
                        <td>${posRes[i].p_id}</td>
                        <td>${posRes[i].p_name}</td>
                        <td>${posRes[i].p_cost}</td>
                    </tr>
                `
            }


            document.getElementById('op').innerHTML = x
        },
        error: (errRes) => {
            console.log(errRes)
        }
    })
}
//LOAD()
$(document).ready(() => {
    $('#getData').click((event) => {
        event.preventDefault()
        LOAD()
    })
    $('#send').click((event) => {
        event.preventDefault()
        let data = JSON.stringify({
            "id": parseFloat(document.getElementById('uid').value),
            "p_id": parseInt(document.getElementById('p_id').value),
            "p_name": document.getElementById('p_name').value,
            "p_cost": parseInt(document.getElementById('p_cost').value)
        })
        $.ajax({
            url: url,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: (posRes) => {
                console.log(posRes)
                LOAD()
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
    $('#update').click((event) => {
        event.preventDefault()
        let id = parseFloat(document.getElementById('uid').value)
        let data = JSON.stringify({
            "p_id": parseInt(document.getElementById('p_id').value),
            "p_name": document.getElementById('p_name').value,
            "p_cost": parseInt(document.getElementById('p_cost').value)
        })
        $.ajax({
            url: url + '/' + id,
            type: 'PUT',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: (posRes) => {
                console.log(posRes)
                LOAD()
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
    $('#delete').click((event) => {
        event.preventDefault()
        let id = parseFloat(document.getElementById('uid').value)
        $.ajax({
            url: url + '/' + id,
            type: 'DELETE',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (posRes) => {
                console.log(posRes)
                LOAD()
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
})
