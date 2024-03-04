    import khttp.*

    fun main() {
        val url = "http://example.com/api/data"

        try {
            val response = khttp.get(url)

            if (response.statusCode == 200) {
                println(response.text)
            } else {
                println("Request failed with status code ${response.statusCode}")
            }
        } catch (e: Exception) {
            println("Error: ${e.message}")
        }

        try {
            val response = khttp.put(url)

            if (response.statusCode == 200) {
                println(response.text)
            } else {
                println("Request failed with status code ${response.statusCode}")
            }
        } catch (e: Exception) {
            println("Error: ${e.message}")
        }

        try {
            val response = khttp.post(url)

            if (response.statusCode == 200) {
                println(response.text)
            } else {
                println("Request failed with status code ${response.statusCode}")
            }
        } catch (e: Exception) {
            println("Error: ${e.message}")
        }

        try {
            val response = khttp.head(url)

            if (response.statusCode == 200) {
                println(response.text)
            } else {
                println("Request failed with status code ${response.statusCode}")
            }
        } catch (e: Exception) {
            println("Error: ${e.message}")
        }
    }
