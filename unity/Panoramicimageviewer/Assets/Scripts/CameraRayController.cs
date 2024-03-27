using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class CameraRayController : MonoBehaviour
{
    Text infoText;
    Slider delaySlider;
    float delayTimer = 0f;

    void Start()
    {
        infoText = GameObject.Find("InfoText").GetComponent<Text>();
        infoText.enabled = false;
        delaySlider = GameObject.Find("DelaySlider").GetComponent<Slider>();
        delaySlider.gameObject.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 rayDirection = transform.TransformDirection(Vector3.forward) * 20;
        Debug.DrawRay(transform.position, rayDirection, Color.green);
        RaycastHit hit;

        if (Physics.Raycast(transform.position, rayDirection, out hit, 50))
        {

            Debug.Log("hitting something: " + hit.collider.gameObject.name);
            if (hit.collider.CompareTag("InfoSpot"))
            {
                DisplayInfoText(hit.collider.gameObject.name);
            }
            if (hit.collider.CompareTag("TeleportSpot"))
            {
                MoveToScene(hit.collider.gameObject.name);
            }
        }
        else
        {
            ResetHit();
        }
    }

    void DisplayInfoText(string gameObjectName)
    {
        infoText.enabled = true;
        if (gameObjectName == "InfoCapsule")
        {
            infoText.text = "This is a capsule on a table";
        }
        else
        {
            infoText.text = "This is a default message.";
        }
    }

    void MoveToScene(string sceneName)
    {
        delayTimer = delayTimer + Time.deltaTime;
        delaySlider.gameObject.SetActive(true);
        delaySlider.value = delayTimer;
        if (delayTimer > 2)
        {
            SceneManager.LoadScene(sceneName);
        }
    }

    void ResetHit()
    {
        infoText.enabled = false;
        delaySlider.gameObject.SetActive(false);
        delayTimer = 0f;
    }

}